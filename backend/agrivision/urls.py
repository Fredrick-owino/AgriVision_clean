"""
URL configuration for Agrivision project.

Routes:
- Admin dashboard
- API endpoints (YOLOv8 detection, etc.)
- OpenAPI/Swagger docs
- Media files including videos (processed/, tmp/)
"""

from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve as static_serve
import os

# OpenAPI and documentation views
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView
)

urlpatterns = [
    # Admin interface
    path('admin/', admin.site.urls),

    # API routes
    path('api/', include('api.urls')),

    # OpenAPI schema and docs
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/docs/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

# Serve media files correctly during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    # Explicitly serve processed/ and tmp/ directories with proper headers
    urlpatterns += [
        re_path(r'^media/processed/(?P<path>.*)$', static_serve, {
            'document_root': os.path.join(settings.MEDIA_ROOT, 'processed'),
        }),
        re_path(r'^media/tmp/(?P<path>.*)$', static_serve, {
            'document_root': os.path.join(settings.MEDIA_ROOT, 'tmp'),
        }),
    ]
