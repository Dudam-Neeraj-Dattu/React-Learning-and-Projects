import './App.css';
// import react from 'react'
import { useState } from 'react';

const App = () => {

  // var text = '';
  const [text, setText] = useState('');

  const fetchapi = () => {

    // setInterval(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setText(data.fact);        
      })
    // }, 5000);


  }

  return (
    <div className="App">
      <button onClick={fetchapi} >Generate Cat Fact</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
