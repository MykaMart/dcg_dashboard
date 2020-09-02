import React from 'react';
import Card from './components/Card';
import './App.scss';

function App() {

  return (
    <div className="App">
        <div id="card-div">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  );
}

export default App;
