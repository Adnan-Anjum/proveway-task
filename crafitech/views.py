from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
import json
import uuid
from datetime import datetime
from pytz import timezone 



def index(request):
    return render(request,'index.html')


def aboutus(request):
    
    return render(request,'about-us.html')


