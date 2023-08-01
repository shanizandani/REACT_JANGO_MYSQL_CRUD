import React from 'react';
import DepartmentList from './DepartmentList';
import EmployeeList from './EmployeeList';
// import { AppProvider } from './CounterContext.js/AppContext';
import { EmployeeProvider } from './CounterContext.js/EmployeeContext';
import { DepartmentProvider } from './CounterContext.js/DepartmentContext';


function App() {
  return (
  
    <DepartmentProvider>
    <EmployeeProvider>
      
      <div>
        <h1>Employee Management App</h1>
        <DepartmentList />
        <EmployeeList />
      </div>
      </EmployeeProvider>
    </DepartmentProvider>
   
  );
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { DepartmentProvider } from './DepartmentContext';
// import { EmployeeProvider } from './EmployeeContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <DepartmentProvider>
//       <EmployeeProvider>
//         <App />
//       </EmployeeProvider>
//     </DepartmentProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
