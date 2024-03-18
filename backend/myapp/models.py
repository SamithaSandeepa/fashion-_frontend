# myapp/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

# Define the CustomUser model
class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = (
        (1, 'customer'),
        (2, 'seller'),
    )
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)
    # You can add other fields specific to the user here

# Define the UserProfile model
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    # You can add more fields to the user profile here

    def __str__(self):
        return f'{self.user.username} Profile'
