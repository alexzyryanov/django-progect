from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('actors/', views.actor, name='actor'),
    path('actors/video/<int:pk>/', views.video, name='video'),
]
