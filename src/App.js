import './App.css';

const App = () => {

    var num = 0;

    const increase = () => {
        num += 1;
        console.log(num);
    }

    const decrease = () => {
        num -=1 ;
        console.log(num);
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
