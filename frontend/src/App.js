import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';




function App() {
  const [junk, setJunk] = useState(["wunker", "bunker", "Aron"]);

  function junkToList(){
    let listOJunk = junk.map(n => <li key = {n}>{n}</li>);
    return listOJunk;
  }

  function handleClick(){
    fetch('/api/junk')
    .then(res => {return res.json()})
    .then(val => {setJunk(val)})
  }

  // return (
  //   <div className="App">
  //     <h1>List O Junk</h1>
  //     <ul>
  //       {junkToList()}
  //     </ul>

  //     <button onClick = {handleClick}>Click here to get backend junk</button>
  //   </div>
  // );

  //-----------------------------------------------clock stuff
  const [time, setTime] = useState('');

function FormatTime(val){
  if(val < 10){
    return '0'
  }else{
    return '';
  }
} //used to add 0s to the start of single digit numbers

useEffect(() => {
  tick();
  const timerID = setInterval(() => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(FormatTime(h) + h + ":" + FormatTime(m) + m + ":" + FormatTime(s) + s);
  }, 1000);

  return () => clearInterval(timerID);
}, [])

function tick(){


}

return(
  <div className = 'clock'>
    <h1 className = "Time">{time}</h1>
  </div>
)



}

export default App;



