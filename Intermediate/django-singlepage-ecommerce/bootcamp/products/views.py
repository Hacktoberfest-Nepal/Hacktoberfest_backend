from django.http import HttpResponse
from django.shortcuts import render

from .models import Product

# Create your views here.
def home_view(request,*args,**kwargs):
    return HttpResponse('<h1>homepage</h1>')

def product_detail_view(request,*args,**kwargs):
    obj = Product.objects.get(id=1)
    return HttpResponse(f"Product id {obj.id}")