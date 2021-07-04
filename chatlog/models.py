from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Chat(models.Model):
    message = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.message
