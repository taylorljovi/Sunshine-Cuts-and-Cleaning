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
import Mowing from './components/Mowing';
import Power_washing from './components/Power_washing';
import Scroll_to_top from './components/Scroll_to_top';
import Sub_main from './components/Sub_main';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Scroll_to_top />
          <Switch>
              <Route path = "/" exact component={Home}/>
              <Route path = "/service" component={Service}/>
              <Route path = "/mow" component={Mowing}/>
              {/* <Route path = "/power-wash" component={Power_washing}/> */}
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
    <Sub_main/>
    <Locations />
    <Footer />
  </div>
);

export default App;
