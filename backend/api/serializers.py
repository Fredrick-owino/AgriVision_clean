from rest_framework import serializers

class DiseaseDetectionSerializer(serializers.Serializer):
    image = serializers.ImageField()
