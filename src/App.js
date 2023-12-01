import './App.css';
import { useState } from 'react'

const App = () => {

    const [text, setText] = useState('I am Neeraj Dattu');
    const [display, setDisplay] = useState(false);
    const [color, setColor] = useState('rgb(0,0,0)')

    const updatetext = () => {
        if(display === true) {
            setText('I am Neeraj Dattu');
            setDisplay(false);
        }
        else {
            setText('');
            setDisplay(true);
        }
    }

    const changecolor = () => {
        var min = 0, max = 255;
        const r = min + (Math.random() * (max - min));
        const g = min + (Math.random() * (max - min));
        const b = min + (Math.random() * (max - min));
        console.log(r, g, b);        
        setColor('rgb(' + r + ',' + g + ',' + b);
    }

    return (
        <div className="App">
            <button onClick={updatetext}>Show/Hide</button>
            <h1 style={{color: color}}>{text}</h1>
            <button onClick={changecolor}>change color</button>
        </div>
    );
}

export default App;
