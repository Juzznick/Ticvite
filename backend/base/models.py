from django.db import models

class Note(models.Model):
    description = models.CharField(max_length=300)
    owner = models.ForeignKey()
