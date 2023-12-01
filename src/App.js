import './App.css';
import { useState } from 'react'

const App = () => {

    const [text, setText] = useState('');

    const updatetext = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="App">
            <input type='text' onChange={updatetext} />
            <h1>{text}</h1>
        </div>
    );
}

export default App;
