from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Departments, Employees
from EmployeeApp.serializers import DepartmentSerializers, EmployeeSerializers

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        departments = Departments.objects.all()
        department_serializers= DepartmentSerializers(departments, many=True)
        return JsonResponse(department_serializers.data, safe=False)
    elif request.method=='POST':
        department_data= JSONParser().parse(request)
        department_serializers= DepartmentSerializers(data=department_data)
        if department_serializers.is_valid():
            department_serializers.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
        # PUT method handling
        department = Departments.objects.get(DepartmentID=id)  # Fetch existing employee by ID
        department_data = JSONParser().parse(request)
        department_serializers = DepartmentSerializers(department, data=department_data)
        if department_serializers.is_valid():
            department_serializers.save()
            return JsonResponse("Update Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)


    elif request.method == 'DELETE':
        # DELETE method handling
        try:
            department = Departments.objects.get(DepartmentID=id)
            department.delete()
            return JsonResponse("Delete Successfully", safe=False)
        except Departments.DoesNotExist:
            return JsonResponse("Department with the specified ID does not exist", safe=False)
        
@csrf_exempt
def EmployeeApi(request, id=0):
    if request.method == 'GET':
        employees = Employees.objects.all()
        employee_serializers = EmployeeSerializers(employees, many=True)
        return JsonResponse(employee_serializers.data, safe=False)
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializers = EmployeeSerializers(data=employee_data)
        if employee_serializers.is_valid():
            employee_serializers.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        # PUT method handling
        employee = Employees.objects.get(EmployeeID=id)  # Fetch existing employee by ID
        employee_data = JSONParser().parse(request)
        employee_serializers = EmployeeSerializers(employee, data=employee_data)
        if employee_serializers.is_valid():
            employee_serializers.save()
            return JsonResponse("Update Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == 'DELETE':
        try:
            employee = Employees.objects.get(EmployeeID=id)
            employee.delete()
            return JsonResponse("Delete Successfully", safe=False)
        except Employees.DoesNotExist:
            return JsonResponse("Employee with the specified ID does not exist", safe=False)
@csrf_exempt
def SaveFile(request):
    file= request.FILES['file'] 
    file_name= default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)






