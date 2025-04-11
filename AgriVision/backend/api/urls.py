from django.urls import path
from .views import DiseasePredictionAPIView, DroneImageUploadAPIView, DiseaseClassListAPIView, drone_upload_predict

urlpatterns = [
    path('predict-disease/', DiseasePredictionAPIView.as_view(), name='predict-disease'),
    path("drone-upload/", DroneImageUploadAPIView.as_view(), name="drone-upload"),
    path('disease-classes/', DiseaseClassListAPIView.as_view(), name='disease-classes'),
     path('drone-upload/', drone_upload_predict, name='drone-upload'),

    
]
