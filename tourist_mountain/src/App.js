import React from 'react';
import './App.css';
import data from './data'
import Mount from './components/Mount'
import Mountcard from './components/Mountcard'

function App() {
  return (
    <div className="app">
      <h1>Tourist Mountains around the World</h1>
      <Mount datas = {data}/>
      
    </div>
  );
} 

export default App;
