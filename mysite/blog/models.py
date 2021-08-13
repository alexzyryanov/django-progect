from django.db import models
from django.utils import timezone


class Actor(models.Model):
    name_actor = models.CharField(max_length=200)
    about_actor = models.TextField()
    image_actor = models.ImageField(upload_to='blog/media', default="not image")

    def __str__(self):
        return self.name_actor


class Content(models.Model):
    actor = models.ForeignKey('Actor', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    image = models.URLField(max_length=1000)
    video = models.URLField(max_length=1000)
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
