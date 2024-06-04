from django.db import models

# Create your models here.
class home(models.Model):
    degree=models.IntegerField()
    img=models.ImageField(upload_to='images')
    desc=models.TextField()
    aqi=models.IntegerField()
    city=models.CharField(max_length=100)

class hour(models.Model):
    degree=models.IntegerField()
    img=models.ImageField(upload_to="hour_images")
    wind=models.IntegerField()
    dewpoint=models.IntegerField()
    visibility=models.IntegerField()
class daily(models.Model):
    date=models.IntegerField()
    month=models.IntegerField()
    image=models.ImageField(upload_to="daily_images")
    high=models.IntegerField()
    low=models.IntegerField()

class month_day(models.Model):
    uv=models.IntegerField()
    wind=models.IntegerField()
    windgusts=models.IntegerField()
    cloudcover=models.IntegerField()
    degree=models.IntegerField()
class month_night(models.Model):
    uv=models.IntegerField()
    wind=models.IntegerField()
    windgusts=models.IntegerField()
    cloudcover=models.IntegerField()
    degree=models.IntegerField()    
