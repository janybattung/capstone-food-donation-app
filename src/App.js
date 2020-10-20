import React from 'react';
import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Charities from './components/pages/Charities';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/charities' component={Charities} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUpForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;