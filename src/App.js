import './App.css';
import { User } from './components/User.js';
// import { User } from './Components/User';



const App = () => {

    const users = [
        {
            name: "Neeraj",
            age: 21,
            email: "neeraj@gmail.com"
        },
        {
            name: "jagan",
            age: 19,
            email: "jagan@gmail.com"
        },
        {
            name: "shiva",
            age: 51,
            email: "shiva@gmail.com"
        }
    ]


    return (
        <div className="App">
            {users.map((user, key) => {
                return (
                    <div>
                        <h1 key={key}>{user.name}</h1>
                        <h2 key={key}>{user.age}</h2>
                        <h3 key={key}>{user.email}</h3>
                    </div>
                )
            })}

            {users.map((user, key) => {
                return (
                    <User key={key} name={user.name} age={user.age} email={user.email} />
                )

            })}
        </div>
    );
}

export default App;
