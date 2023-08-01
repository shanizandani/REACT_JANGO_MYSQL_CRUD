
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // ---------------------- start VIEW employees -------------------------------------------

  useEffect(() => {
    // Fetch employees data from the backend
    axios
      .get('http://127.0.0.1:8000/employee/')
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  // ---------------------- end VIEW employees -------------------------------------------

  // ---------------------- start ADD employees -------------------------------------------

  const addEmployee = (employeeData) => {
    axios
      .post('http://127.0.0.1:8000/employee/', employeeData)
      .then((response) => {
        console.log('Employee added successfully:', response.data);
        // Update the employees state with the newly added employee
        setEmployees([...employees, response.data]);
      })
      .catch((error) => console.error('Failed to add employee:', error));
  };
  // ---------------------- end ADD employees -------------------------------------------

  // ---------------------- start DELETE employees -------------------------------------------

  const deleteEmployee = (employeeID) => {
    axios
      .delete(`http://127.0.0.1:8000/employee/${employeeID}/`)
      .then((response) => {
        console.log('Employee deleted successfully:', response.data);
        // Remove the deleted employee from the employees state
        setEmployees(employees.filter((employee) => employee.EmployeeID !== employeeID));
      })
      .catch((error) => console.error('Failed to delete employee:', error));
  };

  // ---------------------- end DELETE employees -------------------------------------------

  // ---------------------- start PUT employees -------------------------------------------

  
  const updateEmployee = (employeeID, updatedEmployeeData) => {
    axios
      .put(`http://127.0.0.1:8000/employee/${employeeID}/`, updatedEmployeeData)
      .then((response) => {
        console.log('Employee updated successfully:', response.data);
        // Update the employees state with the updated employee
        setEmployees(
          employees.map((employee) =>
            employee.EmployeeID === employeeID ? { ...employee, ...updatedEmployeeData } : employee
          )
        );
      })
      .catch((error) => console.error('Failed to update employee:', error));
  };

  // ---------------------- end PUT employees -------------------------------------------
  const employeeContextValue = {
    employees,
    addEmployee,
    deleteEmployee,
    updateEmployee,
  };

  return (
    <EmployeeContext.Provider value={employeeContextValue}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
