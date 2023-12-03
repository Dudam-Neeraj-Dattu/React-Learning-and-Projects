import './App.css';
import { useState, useEffect } from 'react'
import { Text } from './Text';

const App = () => {


    const [showtext, setShowText] = useState(false);

    const showText = () => {
        setShowText(!showtext)
    }

    return (
        <div className="App">
            <button style={{ cursor: 'pointer' }} onClick={showText}>Show/Hide Text</button>
            <br />

            {showtext && <Text />}


        </div>
    );
}

export default App;
