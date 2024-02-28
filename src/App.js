
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"; 
import About from './About';
import {Link} from 'react-router-dom';
import Home from './home';
import { CustomRoute } from './CustomRoute';
import { Header } from './Header';
function App() {
  return (
   
        <Router>
        <Header />
          <CustomRoute/>
        </Router> 
  );
}

export default App;
