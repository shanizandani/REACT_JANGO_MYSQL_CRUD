

from django.urls import path, re_path
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # Use 're_path' instead of 'url'
    re_path(r'^department/$', views.departmentApi),
    re_path(r'^department/([0-9]+)/$', views.departmentApi),
    re_path(r'^employee/$', views.EmployeeApi),
    re_path(r'^employee/([0-9]+)/$', views.EmployeeApi),
    re_path(r'^employee/savefile', views.SaveFile),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
