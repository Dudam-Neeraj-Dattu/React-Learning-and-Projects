import './App.css';
import { useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0);

    const increase = () => {
        setNum(num + 1);
    }
    
    const decrease = () => {
        setNum(num - 1);
    }

    return (
        <div className="App">
            <button onClick={decrease}>Decrease num</button>
            <h1>{num}</h1>
            <button onClick={increase}>Increase num</button>
        </div>
    );
}

export default App;
