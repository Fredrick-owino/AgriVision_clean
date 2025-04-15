"""
URL configuration for Agrivision project.

The `urlpatterns` list routes URLs to views. For more information:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/

Includes:
- Admin dashboard
- YOLOv8 image & video detection endpoints
- API schema (OpenAPI 3.0)
- Swagger UI docs
- ReDoc API documentation
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# OpenAPI and documentation views
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView
)

urlpatterns = [
    # Admin interface
    path('admin/', admin.site.urls),

    # API routes (e.g., YOLO inference)
    path('api/', include('api.urls')),

    # OpenAPI schema generation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),

    # Interactive Swagger UI
    path('api/docs/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # ReDoc alternative documentation
    path('api/docs/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
