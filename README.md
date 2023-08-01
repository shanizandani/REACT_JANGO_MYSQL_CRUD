# REACT_JANGO_MYSQL_CRUD

This is a full-stack web application that allows you to perform CRUD (Create, Read, Update, Delete) operations on employees and departments.

## Features

- View a list of employees with their details, including name, department, date of joining, and photo file name.
- Add a new employee to the database.
- Update an existing employee's details.
- Delete an employee from the database.
- View a list of departments and their details.
- Add a new department to the database.
- Update an existing department's name.
- Delete a department from the database.

## Frontend (React)

The frontend of the application is built using React. It communicates with the backend API to perform CRUD operations on employees and departments. The frontend is divided into two main components:

- EmployeeList: Displays a list of employees, allows adding, updating, and deleting employees.
- DepartmentList: Displays a list of departments, allows adding, updating, and deleting departments.

## Backend (Django REST API)

The backend of the application is built using Django and Django REST framework. It provides the following API endpoints:

- `/employee/`: GET (list employees), POST (add a new employee)
- `/employee/:id/`: GET (retrieve an employee), PUT (update an employee), DELETE (delete an employee)
- `/department/`: GET (list departments), POST (add a new department)
- `/department/:id/`: GET (retrieve a department), PUT (update a department), DELETE (delete a department)

## Setup

1. Clone the repository to your local machine.
2. Navigate to the `DjangoAPI` folder and run the Django development server using `python manage.py runserver`.
3. Navigate to the `myapp` folder and run the React development server using `npm start`.

Make sure to have Python and Node.js installed on your machine.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request. Your contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


