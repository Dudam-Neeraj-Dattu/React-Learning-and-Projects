import './App.css';
import { useEffect, useState } from 'react';


const App = () => {

  const [text, setText] = useState('')

  const fetchapi = (category) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((res) => res.json())
      .then((data) => {
        setText(data[0].excuse);
        console.log(data[0])
      })
  }

  return (
    <div className="App">
      <h1>Excuser</h1>      
      <button onClick={() => fetchapi('family')}>Family</button>
      <br />
      <button onClick={() => fetchapi('party')}>Party</button>
      <br />
      <button onClick={() => fetchapi('office')}>Office</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
