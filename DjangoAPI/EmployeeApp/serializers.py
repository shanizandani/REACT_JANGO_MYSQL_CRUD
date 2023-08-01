from rest_framework import serializers
from EmployeeApp.models import Departments, Employees

class DepartmentSerializers(serializers.ModelSerializer):
    class Meta:
        model= Departments
        fields=('DepartmentID','DepartmentName')


class EmployeeSerializers(serializers.ModelSerializer):
    class Meta:
        model= Employees
        fields=('EmployeeID','EmployeeName','Department','DataOfJoining','PhotoFileName')        