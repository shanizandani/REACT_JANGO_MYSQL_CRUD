
import React, { useContext, useState } from 'react';
import { EmployeeContext } from './CounterContext.js/EmployeeContext';

const EmployeeList = () => {
    // Access employees from the context
    const { employees, addEmployee, deleteEmployee, updateEmployee } = useContext(EmployeeContext);
    const [newEmployeeName, setNewEmployeeName] = useState('');
    const [newDepartment, setNewDepartment] = useState('');
    const [newDateOfJoining, setNewDateOfJoining] = useState('');
    const [newPhotoFileName, setNewPhotoFileName] = useState('');

    // -----------------start ADD employees------------------------------

  const handleAddEmployee = () => {
    if (
      newEmployeeName.trim() === '' ||
      newDepartment.trim() === '' ||
      newDateOfJoining.trim() === '' ||
      newPhotoFileName.trim() === ''
    ) {
      alert('Please fill in all the fields.');
      return;
    }

    addEmployee({
      EmployeeName: newEmployeeName,
      Department: newDepartment,
      DataOfJoining: newDateOfJoining,
      PhotoFileName: newPhotoFileName,
    });

    // Clear the input fields after adding the employee
    setNewEmployeeName('');
    setNewDepartment('');
    setNewDateOfJoining('');
    setNewPhotoFileName('');
  };

// ------------------------------------end ADD employees-------------------------------

// ------------------------------------start DELETE employees-------------------------------
  
  const handleDeleteEmployee = (employeeID) => {
    // Call the deleteEmployee function from the context with the employeeID
    deleteEmployee(employeeID);
  };
// ------------------------------------end DELETE employees-------------------------------


const handleUpdateEmployee = (employeeID) => {
  if (
    newEmployeeName.trim() === '' ||
    newDepartment.trim() === '' ||
    newDateOfJoining.trim() === '' ||
    newPhotoFileName.trim() === ''
  ) {
    alert('Please fill in all the fields.');
    return;
  }

  updateEmployee(employeeID, {
    EmployeeName: newEmployeeName,
    Department: newDepartment,
    DataOfJoining: newDateOfJoining,
    PhotoFileName: newPhotoFileName,
  });

  // Clear the input fields after updating the employee
  setNewEmployeeName('');
  setNewDepartment('');
  setNewDateOfJoining('');
  setNewPhotoFileName('');
};



  return (

    // --------------------------------------------start VIEW employees-----------------
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeID}>
            <strong>{employee.EmployeeName}</strong> - {employee.Department}
            <br />
            Date of Joining: {employee.DataOfJoining}
            <br />
            Photo File Name: {employee.PhotoFileName}

{/* ---------------------------------------end VIEW employee------------------------------ */}
            
{/* ------------------------start DELETE employee--------------------------------------- */}
            <button onClick={() => handleDeleteEmployee(employee.EmployeeID)}>   Delete </button>
   {/* -----------------------------end DELETE employee---------------------------------------          */}

{/* -------------------------------start UPDATE employee--------------------------------------- */}
            <button onClick={() => handleUpdateEmployee(employee.EmployeeID)}>Update</button>
  {/* --------------------------------- start UPDATE employee-----------------------------------------           */}
          </li>
        ))}
      </ul>
     {/* -------------------------------------start ADD employee---------------------------------  */}
      <div>
        <h3>Add a New Employee</h3>
        <input
          type="text"
          value={newEmployeeName}
          onChange={(e) => setNewEmployeeName(e.target.value)}
          placeholder="Employee Name"
        />
        <input
          type="text"
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
          placeholder="Department"
        />
        <input
          type="date"
          value={newDateOfJoining}
          onChange={(e) => setNewDateOfJoining(e.target.value)}
          placeholder="Date of Joining"
        />
        <input
          type="text"
          value={newPhotoFileName}
          onChange={(e) => setNewPhotoFileName(e.target.value)}
          placeholder="Photo File Name"
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
       
        {/* <button onClick={() => handleUpdateEmployee(employee.EmployeeID)}>
              Update
            </button> */}


      </div>
    </div>

    // -----------------------------------------stop ADD employees-------------------------------
  );
};

export default EmployeeList;