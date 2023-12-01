import './App.css';
import { useState } from 'react'

const App = () => {

    const [count, setCount] = useState(0)
    
    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    const setzero = () => {
        setCount(0);
    }


    return (
        <div className="App">
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={setzero}>set to zero</button>
            <h1>{count}</h1>
        </div>
    );
}

export default App;
