import './App.css';

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  )
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
    </div>
  )
}


const App = () => {
  
  return (
    <div className="App">      
      <User name='Neeraj' age={22} email='neeraj@gmail.com' />
      <Job salary={2345} position='senior' company='amazon'/>
      
    </div>
  );
}

export default App;
