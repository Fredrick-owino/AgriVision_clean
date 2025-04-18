from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .serializers import DiseaseDetectionSerializer
from models.crop_disease.inference import DiseaseDetector
from models.yolo.inference import run_yolo_inference

import os
import tempfile
import uuid
import mimetypes
from datetime import datetime
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.http import FileResponse, Http404
from urllib.parse import unquote as urlunquote

from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from drf_spectacular.utils import extend_schema, OpenApiResponse
from django.http import JsonResponse

import logging
logger = logging.getLogger(__name__)


def test_preview_debug(request):
    return JsonResponse({"message": "✅ preview route working"})


# Load model globally
try:
    detector = DiseaseDetector()
except Exception as e:
    logger.error("❌ Failed to load plant disease model: %s", e)
    detector = None


def format_error(message, code, details=None):
    return {
        "error": {
            "message": message,
            "code": code,
            "details": details
        }
    }


def save_uploaded_file(uploaded_file, suffix=".jpg"):
    temp_dir = os.path.join(settings.MEDIA_ROOT, "tmp")
    os.makedirs(temp_dir, exist_ok=True)
    temp_path = os.path.join(temp_dir, f"{uuid.uuid4()}{suffix}")
    with open(temp_path, 'wb+') as f:
        for chunk in uploaded_file.chunks():
            f.write(chunk)
    return temp_path


@extend_schema(
    request={
        'multipart/form-data': {
            'type': 'object',
            'properties': {
                'image': {
                    'type': 'string',
                    'format': 'binary',
                    'description': 'Upload a plant image for disease detection'
                }
            },
            'required': ['image']
        }
    },
    responses={
        200: OpenApiResponse(description="Predicted plant disease and confidence."),
        400: OpenApiResponse(description="Invalid or missing image."),
        500: OpenApiResponse(description="Prediction failed.")
    },
    description="Upload a plant image to detect disease using a trained ML model."
)
class DiseasePredictionAPIView(APIView):
    def post(self, request):
        serializer = DiseaseDetectionSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                format_error("Invalid input.", "invalid_input", serializer.errors),
                status=status.HTTP_400_BAD_REQUEST
            )

        image = serializer.validated_data["image"]

        try:
            temp_path = save_uploaded_file(image)
            prediction = detector.predict(temp_path)
            return Response(prediction, status=status.HTTP_200_OK)
        except Exception as e:
            logger.exception("Prediction error:")
            return Response(
                format_error("Prediction failed.", "predict_failed", str(e)),
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        finally:
            if os.path.exists(temp_path):
                os.remove(temp_path)


class DroneImageUploadAPIView(APIView):
    def post(self, request):
        image_file = request.FILES.get("image")

        if not image_file:
            return Response(
                format_error("No image provided.", "no_image"),
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
            filename = f"{timestamp}_{uuid.uuid4().hex}.jpg"
            save_path = os.path.join('media/drone_uploads/', filename)
            stored_path = default_storage.save(save_path, ContentFile(image_file.read()))
            full_image_path = os.path.join(settings.BASE_DIR, stored_path)

            prediction = detector.predict(full_image_path)

            return Response(prediction, status=status.HTTP_200_OK)
        except Exception as e:
            logger.exception("Drone image prediction error:")
            return Response(
                format_error("Prediction failed.", "predict_failed", str(e)),
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class DiseaseClassListAPIView(APIView):
    def get(self, request):
        class_labels = detector.model.classes if hasattr(detector.model, 'classes') else []
        return Response({"classes": class_labels})


@extend_schema(
    methods=['POST'],
    request={
        'multipart/form-data': {
            'type': 'object',
            'properties': {
                'file': {
                    'type': 'string',
                    'format': 'binary',
                    'description': 'Upload an image or video file (JPG, PNG, MP4)'
                }
            },
            'required': ['file']
        }
    },
    responses={
        200: OpenApiResponse(
            response={
                "type": "object",
                "properties": {
                    "count": {"type": "integer", "example": 17},
                    "media_url": {"type": "string", "format": "uri"},
                    "type": {"type": "string", "example": "image"},
                    "preview_inline": {"type": "string"},
                }
            },
            description="Returns processed media URL and detected apple count."
        ),
        400: OpenApiResponse(description="No file uploaded or invalid request."),
        500: OpenApiResponse(description="Inference error or model failure.")
    },
    description="Run apple detection on uploaded image or video using YOLOv8."
)
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def detect_apples_yolo(request):
    uploaded_file = request.FILES.get('file')

    if not uploaded_file:
        return Response({"error": "No file uploaded."}, status=status.HTTP_400_BAD_REQUEST)

    valid_types = ["image/jpeg", "image/png", "video/mp4"]
    if uploaded_file.content_type not in valid_types:
        return Response({"error": "Unsupported file type."}, status=status.HTTP_400_BAD_REQUEST)

    file_ext = uploaded_file.name.split('.')[-1]
    temp_path = save_uploaded_file(uploaded_file, suffix=f".{file_ext}")

    try:
        result = run_yolo_inference(temp_path)
    except Exception as e:
        logger.exception("YOLO inference error:")
        os.remove(temp_path)
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    rel_path = result["output_path"].split("media/")[-1]
    media_url = request.build_absolute_uri(settings.MEDIA_URL + rel_path)
    preview_inline_url = request.build_absolute_uri(f"/api/preview/tmp/{os.path.basename(result['output_path'])}")

    return Response({
        "count": result["count"],
        "type": result.get("type", "image"),
        "media_url": media_url,
        "preview_inline": preview_inline_url
    }, status=200)


def preview_processed_file(request, filename):
    tmp_path = os.path.join(settings.MEDIA_ROOT, "tmp", urlunquote(filename))
    processed_path = os.path.join(settings.MEDIA_ROOT, "processed", urlunquote(filename))

    file_path = tmp_path if os.path.exists(tmp_path) else processed_path

    if not os.path.exists(file_path):
        raise Http404("File not found.")

    mime_type, _ = mimetypes.guess_type(file_path)
    return FileResponse(open(file_path, 'rb'), content_type=mime_type)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def drone_upload_predict(request):
    image = request.FILES.get('image')

    if not image:
        return Response(
            {"error": "No image file received."},
            status=status.HTTP_400_BAD_REQUEST
        )

    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp_file:
        for chunk in image.chunks():
            temp_file.write(chunk)
        temp_path = temp_file.name

    try:
        prediction = detector.predict(temp_path)
        return Response({"prediction": prediction}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)
