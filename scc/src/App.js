import React, { Component } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Service from "./components/Service";
import './App.css';
import Header from './components/Header';
import GrassBanner from './containers/GrassBanner';
import Locations from './components/Locations';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
              <Route path = "/" exact component={Home}/>
              <Route path = "/service" component={Service}/>
              <Route path = "/about" component={About}/>
              <Route path = "/contact" component={Contact}/>
            </Switch>
        </div>
      </Router>
    );
  };
}

const Home = () => (
  <div className="App">
    <Header />
    <GrassBanner />
    <Locations />
    <Footer />
  </div>
);

export default App;
