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
              <input type="text" className="Holo"></input> 
              <Emp name="btch-00" role="No-Role"/> 
              <input type="text" className="Holo"></input> 
              <Emp name="Btch-1"/> 
              <input type="text" className="Holo"></input> 

          </>
           ):(   // output value for 
                //showemp constant: shown if showemp constant is false.

              <p>cannot see the employees</p>
         )} 
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      
           Learn React in 69 mins !
           
        </a>
      </header>
    </div>
  );
}



export default App;