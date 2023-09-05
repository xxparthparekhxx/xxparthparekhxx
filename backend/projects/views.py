# views.py

from rest_framework import generics
from .models import Stack, ProjectMedia, Project, Post,Contact
from .serializers import StackSerializer, ProjectMediaSerializer, ProjectSerializer, PostSerializer,ContactSerializer


class StackList(generics.ListAPIView):
    queryset = Stack.objects.all()
    serializer_class = StackSerializer


class StackDetail(generics.RetrieveAPIView):
    queryset = Stack.objects.all()
    serializer_class = StackSerializer


class ProjectMediaList(generics.ListAPIView):
    queryset = ProjectMedia.objects.all()
    serializer_class = ProjectMediaSerializer


class ProjectMediaDetail(generics.RetrieveAPIView):
    queryset = ProjectMedia.objects.all()
    serializer_class = ProjectMediaSerializer


class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectDetail(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ProjectListByStack(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        stack_id = self.kwargs['pk']
        return Project.objects.filter(stacks__id=stack_id)


class ContactCreate(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer