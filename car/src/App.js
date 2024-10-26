import React from 'react';
import './App.css';
import VehicleList from './VehicleListPanel/VehicleListPanel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Sharing Application </h1>
      </header>

      <VehicleList /> 
    </div>
  );
}

export default App;
