from django import forms
from .models import Content


class ContentForm(forms.ModelForm):
    class Meta:
        model = Content
        fields = ('actor', 'name', 'image', 'video', 'created_date')
