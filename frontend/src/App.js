import { useState } from 'react';

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

  return (
    <div className="App">
      <h1>List O Junk</h1>
      <ul>
        {junkToList()}
      </ul>

      <button onClick = {handleClick}>Click here to get backend junk</button>
    </div>
  );
}

export default App;
