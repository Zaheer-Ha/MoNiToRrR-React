import './App.css';
import Emp from './comps/Employee';
import React from 'react';



function App() {
console.log("About to enter User profile");
const showemp = true;

  return (
    
    <div className="App">
      <header className="App-header">
        {showemp ? (
          <>   
              <Emp name="Btch" role="Intern"/> 
              <Emp name="btch-00" role="Intern"/> 
              <Emp name="Btch-01" role="Intern"/> 
          </>
           ):(   /// output value for showemp constant

              <p>cannot see the employees</p>
         )} 
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      
           Learn React in 69 mins !
           <employee />
        </a>
      </header>
    </div>
  );
}



export default App;