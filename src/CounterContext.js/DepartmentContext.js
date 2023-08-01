import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DepartmentContext = createContext();

const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);

  // ----------------------------- start CREATE ---------------------------------------------------------------------------

  useEffect(() => {
    // Fetch departments data from the backend
    axios
      .get('http://127.0.0.1:8000/department/')
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error(error));
  }, []);

// ----------------------------- stop CREATE ---------------------------------------------------------------------------

  // ----------------------------- start ADD ---------------------------------------------------------------------------

  const addDepartment = (departmentData) => {
    axios
      .post('http://127.0.0.1:8000/department/', departmentData)
      .then((response) => {
        console.log('Department added successfully:', response.data);
        // Update the departments state with the newly added department
        setDepartments([...departments, response.data]);
      })
      .catch((error) => console.error('Failed to add department:', error));
  };

// ----------------------------- end ADD ---------------------------------------------------------------------------

// ----------------------------- start PUT ---------------------------------------------------------------------------

  const updateDepartment = (departmentID, departmentData) => {
    axios
      .put(`http://127.0.0.1:8000/department/${departmentID}/`, departmentData)
      .then((response) => {
        console.log('Department updated successfully:', response.data);
        // Update the departments state with the updated department
        setDepartments(
          departments.map((department) =>
            department.DepartmentID === departmentID ? response.data : department
          )
        );
      })
      .catch((error) => console.error('Failed to update department:', error));
  };

// ----------------------------- end PUT ---------------------------------------------------------------------------
//  ------------------------------ start DELETE -------------------------------------------

const deleteDepartment = (departmentID) => {
  axios
    .delete(`http://127.0.0.1:8000/department/${departmentID}/`)
    .then((response) => {
      console.log('Department deleted successfully:', response.data);
      // Remove the deleted department from the departments state
      setDepartments(departments.filter((department) => department.DepartmentID !== departmentID));
    })
    .catch((error) => console.error('Failed to delete department:', error));
};

// -----------------------------------stop DELETE----------------------------------
 
  const departmentContextValue = {
    departments,
    addDepartment,
    updateDepartment,
    deleteDepartment,
  };

  return (
    <DepartmentContext.Provider value={departmentContextValue}>
      {children}
    </DepartmentContext.Provider>
  );
};

export { DepartmentContext, DepartmentProvider };

