import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import {Navbar} from './Navbar'

const App= () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<h1>Page not exist</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
