import React from 'react';
import './App.css';
import "react-router-dom";
import Route from "react-router-dom/es/Route";
import LogInComponent from "./components/LogInComponent";
import RegisterComponent from "./components/RegisterComponent";
import ExecuteQueryComponent from "./components/ExecuteQueryComponent";
import ShowLogfileComponent from "./components/ShowLogfileComponent";

function App() {
  return (
    <div className="App">

      <div className='content'>
        <div className='central-panel'>
          <Route exact path="/" component={LogInComponent}/>
          <Route path="/login" component={LogInComponent}/>
          <Route path="/register" component={RegisterComponent}/>
          <Route path="/query" component={ExecuteQueryComponent}/>
          <Route path="/logfile" component={ShowLogfileComponent}/>
        </div>
        <div className='right-panel'/>
      </div>
    </div>
  );
}


export default App;
