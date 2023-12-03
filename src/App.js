import './App.css';
import { useState } from 'react';


const App = () => {

  // var text = '';
  const [text, setText] = useState('');
  const [name, setName] = useState(null)

  const fetchapi = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setText(data);
      })
  }

  return (
    <div className="App">
      <input
        onChange={(e) => { setName(e.target.value) }}
        type="text"
        name="" id=""
        placeholder='Enter the name'
      />
      <br />
      <button onClick={fetchapi} >Predict Age</button>
      <p>{text?.age}</p>
    </div>
  );
}

export default App;
