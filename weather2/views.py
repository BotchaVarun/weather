from django.shortcuts import render
from .models import home,hour,daily,month_night,month_day
def index(request):
    var=home.objects.filter(id=1)
    return render(request,"home.html",{'var':var})
def main(request):
        city=request.GET["city"]
        var=home.objects.filter(city=city)
        return render(request,"home.html",{'var':var})    
def hourpage(request):
    obj=hour.objects.filter(id=1)
    obj2=hour.objects.filter(id=2)
    obj3=hour.objects.filter(id=3)
    obj4=hour.objects.filter(id=4)
    obj5=hour.objects.filter(id=5)
    obj6=hour.objects.filter(id=6)
    obj7=hour.objects.filter(id=7)
    obj8=hour.objects.filter(id=8)
    obj9=hour.objects.filter(id=9)
    obj10=hour.objects.filter(id=10)
    obj11=hour.objects.filter(id=11)
    obj12=hour.objects.filter(id=12)
    obj13=hour.objects.filter(id=13)
    obj14=hour.objects.filter(id=14)
    obj15=hour.objects.filter(id=15)
    obj16=hour.objects.filter(id=16)
    obj17=hour.objects.filter(id=17)
    obj18=hour.objects.filter(id=18)
    obj19=hour.objects.filter(id=19)
    obj20=hour.objects.filter(id=20)
    obj21=hour.objects.filter(id=21)
    obj22=hour.objects.filter(id=22)
    obj23=hour.objects.filter(id=23)
    obj24=hour.objects.filter(id=24)
    return render(request,"hour.html",{"obj":obj,"obj2":obj2,"obj3":obj3,"obj4":obj4,"obj5":obj5,"obj6":obj6,"obj7":obj7,"obj8":obj8,"obj9":obj9,"obj10":obj10,"obj11":obj11,"obj12":obj12,"obj13":obj13,"obj14":obj14,"obj15":obj15,"obj16":obj16,"obj17":obj17,"obj18":obj18,"obj19":obj19,"obj20":obj20,"obj21":obj21,"obj22":obj22,"obj23":obj23,"obj24":obj24})    
def dailypage(request):
    man1=daily.objects.filter(id=1)
    man2=daily.objects.filter(id=2)
    man3=daily.objects.filter(id=3)
    man4=daily.objects.filter(id=4)
    man5=daily.objects.filter(id=5)
    man6=daily.objects.filter(id=6)
    man7=daily.objects.filter(id=7)
    man8=daily.objects.filter(id=8)
    man9=daily.objects.filter(id=9)
    man10=daily.objects.filter(id=10)
    man11=daily.objects.filter(id=11)
    man12=daily.objects.filter(id=12)
    man13=daily.objects.filter(id=13)
    man14=daily.objects.filter(id=14)
    return render(request,"daily.html",{'man1':man1,'man2':man2,'man3':man3,'man4':man4,'man5':man5,'man6':man6,'man7':man7,'man8':man8,'man9':man9,'man10':man10,'man11':man11,'man12':man12,'man13':man13,'man14':man14})    
def air(request):
    return render(request,"air.html")    
def monthly(request):
    day1=month_day.objects.filter(id=1)
    day2=month_day.objects.filter(id=2)
    day3=month_day.objects.filter(id=3)
    day4=month_day.objects.filter(id=4)
    day5=month_day.objects.filter(id=5)
    day6=month_day.objects.filter(id=6)
    day7=month_day.objects.filter(id=7)
    day8=month_day.objects.filter(id=8)
    night1=month_night.objects.filter(id=1)
    night2=month_night.objects.filter(id=2)
    night3=month_night.objects.filter(id=3)
    night4=month_night.objects.filter(id=4)
    night5=month_night.objects.filter(id=5)
    night6=month_night.objects.filter(id=6)
    night7=month_night.objects.filter(id=7)
    night8=month_night.objects.filter(id=8)
    return render(request,"monthly.html",{"day1":day1,"day2":day2,"day3":day3,"day4":day4,"day5":day5,"day6":day6,"day7":day7,"day8":day8,"night1":night1,"night2":night2,"night3":night3,"night4":night4,"night5":night5,"night6":night6,"night7":night7,"night8":night8})                
# Create your views here.