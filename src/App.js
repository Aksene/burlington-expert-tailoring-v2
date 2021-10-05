import './App.css';
import Home from './components/HomePage/Home'
import Services from './components/Services/Services'
import AboutMe from './components/AboutMe/AboutMe'
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe/ContactMe';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/get-to-know-me' exact component={AboutMe}/>
        <Route path='/contact-me' exact component={ContactMe}/>
      </Switch>
    </Router> 
  );
}

export default App;
