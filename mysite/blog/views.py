from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Actor, Content


def index(request):
    actors = Actor.objects.all()
    return render(request, 'blog/index.html', {'actors': actors})


def video(request, pk):
    actors = Actor.objects.filter(id=pk)
    contents = Content.objects.filter(actor_id=pk)
    paginator = Paginator(contents, 48)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'blog/video.html', {'actors': actors, 'page_obj': page_obj})
