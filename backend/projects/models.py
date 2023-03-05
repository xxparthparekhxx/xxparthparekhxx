from django.db import models
# Create your models here.


class Stack(models.Model):
    img = models.ImageField()
    name = models.CharField(max_length=50)
    creator = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class ProjectMedia(models.Model):
    is_image = models.BooleanField()
    img = models.ImageField(blank=True)
    video = models.FileField(upload_to='videos_uploaded', blank=True)
    description_for_alt = models.TextField()

    def __str__(self) -> str:
        return self.description_for_alt


class Project(models.Model):
    stacks = models.ManyToManyField(Stack)
    name = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True)
    completed = models.BooleanField(default=False)
    medias = models.ManyToManyField(ProjectMedia)

    def __str__(self) -> str:
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    Media = models.ManyToManyField(ProjectMedia, verbose_name=("PostMedia"))
    date_posted = models.DateTimeField(auto_now_add=True)
    categories = models.ManyToManyField(Stack)

    def __str__(self):
        return self.title
