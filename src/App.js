import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-router-dom";
import Route from "react-router-dom/es/Route";
import { LogInComponent, RegisterComponent, ExecuteQueryComponent, ShowLogfileComponent } from "./components/";

function App() {
  return (
    <div className="App">

      <div className='content'>
        <div className='central-panel'>
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
