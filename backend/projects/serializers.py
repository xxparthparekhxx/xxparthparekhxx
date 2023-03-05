# serializers.py

from rest_framework import serializers
from .models import Stack, ProjectMedia, Project, Post


class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = '__all__'


class ProjectMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMedia
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    stacks = StackSerializer(many=True, read_only=True)
    medias = ProjectMediaSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    categories = StackSerializer(many=True, read_only=True)
    Media = ProjectMediaSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'
