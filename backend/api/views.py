from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .serializers import DiseaseDetectionSerializer
from models.crop_disease.inference import DiseaseDetector
import os
import tempfile
import uuid
from datetime import datetime
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser

# Load model globally once
detector = DiseaseDetector()

def format_error(message, code, details=None):
    return {
        "error": {
            "message": message,
            "code": code,
            "details": details
        }
    }

class DiseasePredictionAPIView(APIView):
    def post(self, request):
        serializer = DiseaseDetectionSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                format_error("Invalid input.", "invalid_input", serializer.errors),
                status=status.HTTP_400_BAD_REQUEST
            )

        image = serializer.validated_data["image"]

        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg", dir=settings.BASE_DIR) as temp_file:
            for chunk in image.chunks():
                temp_file.write(chunk)
            temp_path = temp_file.name

        try:
            prediction = detector.predict(temp_path)
            return Response({"prediction": prediction}, status=status.HTTP_200_OK)
        except Exception as e:
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

            return Response({
                "prediction": prediction['label'],
                "confidence": prediction['confidence'],
            }, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(
                format_error("Prediction failed.", "predict_failed", str(e)),
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class DiseaseClassListAPIView(APIView):
    def get(self, request):
        class_labels = [
            "Apple___Apple_scab", "Apple___Black_rot", "Apple___Cedar_apple_rust", "Apple___healthy",
            "Blueberry___healthy", "Cherry_(including_sour)___Powdery_mildew", "Cherry_(including_sour)___healthy",
            "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot", "Corn_(maize)___Common_rust_",
            "Corn_(maize)___Northern_Leaf_Blight", "Corn_(maize)___healthy", "Grape___Black_rot",
            "Grape___Esca_(Black_Measles)", "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)", "Grape___healthy",
            "Orange___Haunglongbing_(Citrus_greening)", "Peach___Bacterial_spot", "Peach___healthy",
            "Pepper,_bell___Bacterial_spot", "Pepper,_bell___healthy", "Potato___Early_blight",
            "Potato___Late_blight", "Potato___healthy", "Raspberry___healthy", "Soybean___healthy",
            "Squash___Powdery_mildew", "Strawberry___Leaf_scorch", "Strawberry___healthy",
            "Tomato___Bacterial_spot", "Tomato___Early_blight", "Tomato___Late_blight", "Tomato___Leaf_Mold",
            "Tomato___Septoria_leaf_spot", "Tomato___Spider_mites Two-spotted_spider_mite", "Tomato___Target_Spot",
            "Tomato___Tomato_Yellow_Leaf_Curl_Virus", "Tomato___Tomato_mosaic_virus", "Tomato___healthy"
        ]
        return Response({"classes": class_labels})

# Redundant but kept in case frontend prefers this endpoint
drone_detector = DiseaseDetector()

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def drone_upload_predict(request):
    image = request.FILES.get('image')

    if not image:
        return Response(
            format_error("No image file received.", "no_image"),
            status=status.HTTP_400_BAD_REQUEST
        )

    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp_file:
        for chunk in image.chunks():
            temp_file.write(chunk)
        temp_path = temp_file.name

    try:
        prediction = drone_detector.predict(temp_path)
        return Response({"prediction": prediction}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            format_error("Prediction failed.", "predict_failed", str(e)),
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)
