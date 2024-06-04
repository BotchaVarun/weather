from django.contrib import admin
from .models import home,hour,daily,month_day,month_night
# Register your models here.
admin.site.register(home)
admin.site.register(hour)
admin.site.register(daily)
admin.site.register(month_day)
admin.site.register(month_night)