
import React, { useContext, useState } from 'react';
import { DepartmentContext } from './CounterContext.js/DepartmentContext';

const DepartmentList = () => {
  // Access departments from the context
  const { departments, addDepartment, updateDepartment, deleteDepartment } = useContext(DepartmentContext);
  const [newDepartmentName, setNewDepartmentName] = useState('');
  const [editDepartmentName, setEditDepartmentName] = useState('');

  // ----------------------- start ADD departments--------------------------

  const handleAddDepartment = () => {
    if (newDepartmentName.trim() === '') {
      alert('Please enter a department name.');
      return;
    }

    addDepartment({ DepartmentName: newDepartmentName });
    // setNewDepartmentName(''); // Clear the input field after adding the department
    window.location.reload();// refresh
  };

  // ----------------------- end ADD departments--------------------------

  // -----------------------start update departments--------------------------

  const handleUpdateDepartment = (departmentID) => {
    if (editDepartmentName.trim() === '') {
      alert('Please enter a department name.');
      return;
    }

    const updatedDepartmentData = {
      DepartmentName: editDepartmentName,
    };

    updateDepartment(departmentID, updatedDepartmentData);
    // setEditDepartmentName(''); // Clear the input field after updating the department
    window.location.reload();//refresh
  };
  // ----------------------- end update departments--------------------------

  // ----------------------------- start DELETE department-------------------------
  
  const handleDeleteDepartment = (departmentID) => {
    // Call the deleteDepartment function from the context with the departmentID
    deleteDepartment(departmentID);
    window.location.reload(); // refresh
  };

// ------------------------------------stop DELETE department--------------------------------
  return (
    // -------------------- start VIEW department--------------------------------- 
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((department) => (
          <li key={department.DepartmentID}>
            {department.DepartmentName}
            <input
              type="text"
              value={editDepartmentName}
              onChange={(e) => setEditDepartmentName(e.target.value)}
            />
            {/*- -------------------------------------stop VIEW departments--------------------------- */}
            {/* ---------------------------------start UPDATE-------------------------- */}
            <button onClick={() => handleUpdateDepartment(department.DepartmentID)}> Update </button>
            {/* -------------------------------------stop UPDATE------------------------ */}

            {/* --------------------------------start DELETE-------------------------------- */}
            <button onClick={() => handleDeleteDepartment(department.DepartmentID)}>Delete</button>
{/* ------------------------------------------------stop DELETE----------------------------------------- */}
          </li>
        ))}
      </ul>

      {/* -------------------- end  view+update department---------------------------------  */}
{/* ----------------------------------------------------- */}
      <div>
        <h3>Add a New Department</h3>
        <input
          type="text"
          value={newDepartmentName}
          onChange={(e) => setNewDepartmentName(e.target.value)}
        />
        <button onClick={handleAddDepartment}>Add Department</button>
      </div>
    </div>
    // -------------------- end ADD department--------------------------------- 
  );
};

export default DepartmentList;
