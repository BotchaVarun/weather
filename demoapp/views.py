from django.shortcuts import render
from django.http import HttpResponse
def home(request):
    return render(request,"web.html",{'name':'varun'})
def add(request):
    num1=int(request.POST["var1"])
    num2=int(request.POST["var2"])
    res=num1+num2
    return render(request,"result.html",{"result":res})  

