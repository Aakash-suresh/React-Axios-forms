import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfileComponent from './Components/profileComponent/ProfileComponent';
import CalculatorComponent from './Components/calculatorComponent/calculatorComponent';
import ApiComponents from './Components/apiComponents/ApiComponents';

function App() {
  return (
    <div>
      
      <Router>
        <div className="nav-container">
          <Link className="nav-button" to="/">Portfolio</Link>
          <Link className="nav-button" to="/calculator">Calculator</Link>
          <Link className="nav-button" to="/api">Rick&Morty</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<ProfileComponent />} />
          <Route exact path="/calculator" element={<CalculatorComponent />} />
          <Route exact path="/api" element={<ApiComponents />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
