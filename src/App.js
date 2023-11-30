import './App.css';


const App = () => {

  const isGreen = false;

  return (
    <div className="App">

      {isGreen ?
        <h1 style={{ color: isGreen ? "red" : "green" }} >Green</h1>
        : 
        <h1 style={{ color: isGreen ? "red" : "green" }}>Red</h1>
      }

    </div>
  );
}

export default App;
