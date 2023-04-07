import logo from './logo.svg';
import './App.css';
import Exercise2 from './Exercise3';
import AboutUs from './AboutUs';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <nav>
        
  <Link to='/exercise3'>Exercise3</Link>
  
</nav>

      <Exercise3 />
      
      <Routes>
        <Route path = '/exercise3' element = {<Exercise3/>} />
        <Route path = '/about-us' element = {<AboutUs/>} />
      </Routes>
      
    </div>
  );
}

export default App;
