from django.urls import path
from .views import (
    StackList,
    StackDetail,
    ProjectMediaList,
    ProjectMediaDetail,
    ProjectList,
    ProjectDetail,
    PostList,
    PostDetail,
    ProjectListByStack,
    ContactCreate,
)

urlpatterns = [
    path("stacks/", StackList.as_view(), name="stacks-list"),
    path("stacks/<int:pk>/", StackDetail.as_view(), name="stacks-detail"),
    path(
        "stacks/<int:pk>/projects/",
        ProjectListByStack.as_view(),
        name="project-list-by-stack",
    ),
    path("project-media/", ProjectMediaList.as_view(), name="project-media-list"),
    path(
        "project-media/<int:pk>/",
        ProjectMediaDetail.as_view(),
        name="project-media-detail",
    ),
    path("projects/", ProjectList.as_view(), name="projects-list"),
    path("projects/<int:pk>/", ProjectDetail.as_view(), name="projects-detail"),
    path("posts/", PostList.as_view(), name="posts-list"),
    path("posts/<int:pk>/", PostDetail.as_view(), name="posts-detail"),
    path("contact/create/", ContactCreate.as_view(), name="contact-create"),
]
