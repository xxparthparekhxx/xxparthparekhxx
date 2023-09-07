from django.db import models
# Create your models here.


class Stack(models.Model):
    img = models.ImageField()
    name = models.CharField(max_length=50)
    creator = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class ProjectMedia(models.Model):
    is_logo = models.BooleanField()
    is_image = models.BooleanField()
    img = models.ImageField(blank=True)
    video = models.FileField(upload_to='videos_uploaded', blank=True)
    description_for_alt = models.TextField()

    def __str__(self) -> str:
        return self.description_for_alt


class Project(models.Model):
    stacks = models.ManyToManyField(Stack)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    description_page_html = models.TextField(blank=True, default="")
    start_date = models.DateField()
    github_url = models.CharField(max_length=200, blank=True)
    hosted_url = models.CharField(max_length=200, blank=True)
    end_date = models.DateField(null=True)
    completed = models.BooleanField(default=False)
    medias = models.ManyToManyField(ProjectMedia)

    def __str__(self) -> str:
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=200)
    metadata = models.TextField()
    content = models.TextField()
    Media = models.ManyToManyField(ProjectMedia, verbose_name=("PostMedia"))
    date_posted = models.DateTimeField(auto_now_add=True)
    categories = models.ManyToManyField(Stack)

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    reason = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.email} {self.date_posted}"

class Company(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(blank=True)
    main_url = models.TextField(blank=True)
    stock_indicator = models.CharField(max_length=50)


class certification(models.Model):
    name = models.CharField(max_length=200)
    company = models.ManyToManyField(Company, verbose_name="Creator Company")
    verification_url = models.CharField(max_length=200, blank=True)
    credential_id = models.CharField(max_length=200, blank=True)
    display_image = models.ImageField(blank=True)
