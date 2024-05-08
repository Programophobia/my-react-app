
import './App.css';
import Czas from './czas.js';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [time, setTime]= useState(0);
  const [timer, setTimer] = useState();

  const startStoper = () =>{
    setTimer(setInterval(() =>
    { setTime(prevValue => prevValue + 10);}))
  };

  const stopStoper = () =>{
    clearInterval(timer);}

  const resetStoper = () => {
    stopStoper();
    setTime(0);
    }

  return (
    <div>
      <Czas time={time}/>
      <button onClick={startStoper}>START</button>
      <button onClick={stopStoper}>STOP</button>
      <button onClick={resetStoper}>RESET</button>
    </div>
  );
  }

export default App;
