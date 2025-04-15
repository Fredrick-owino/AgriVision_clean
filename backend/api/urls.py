from django.urls import path
from . import views

urlpatterns = [
    # Disease detection endpoints
    path('predict/disease/', views.DiseasePredictionAPIView.as_view(), name='predict-disease'),
    path('predict/disease/drone/', views.DroneImageUploadAPIView.as_view(), name='predict-disease-drone'),
    path('predict/disease/classes/', views.DiseaseClassListAPIView.as_view(), name='disease-classes'),
    path('predict/disease/legacy/', views.drone_upload_predict, name='predict-disease-legacy'),

    # Apple detection (YOLOv8) endpoint
    path('predict/apple/', views.detect_apples_yolo, name='predict-apples'),

    # Media preview (for images/videos with bounding boxes)
    path('preview/tmp/<str:filename>', views.preview_processed_file, name='preview-media'),
]
