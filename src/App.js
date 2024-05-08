
import './App.css';
import Czas from './czas.js';
import { useState } from 'react';
import { useEffect } from 'react';

 const App = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App">
      <h1>Current date is {date}</h1>
    </div>
  );
 }
export default App;


