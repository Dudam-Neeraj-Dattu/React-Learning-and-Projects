import './App.css';
import { Planets } from './components/Planets';

const App = () => {

    const planets = [
        {name:'mars', isGasPlanet: false},
        {name:'earth', isGasPlanet: false},
        {name:'jupiter', isGasPlanet: true},
        {name:'venus', isGasPlanet: false},
        {name:'neptune', isGasPlanet: true},
        {name:'uranus', isGasPlanet: true},
    ]


    return (
        <div className="App">
            {planets.map((planet, key) => {

                if(planet.isGasPlanet) return ( <h1>{planet.name}</h1> )

                // return (
                //     <Planets name={planet.name} isGasPlanet={planet.isGasPlanet} />
                //     // planet.isGasPlanet ? 
                // )
            })}
        </div>
    );
}

export default App;
