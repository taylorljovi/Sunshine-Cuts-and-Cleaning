import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GrassBanner from './containers/GrassBanner';

class App extends Component {
  render() {

    let links = [
      { label: "Home", link: "/home", active: true },
      { label: "Service and Pricing", link: "/service" },
      { label: "About", link: "/about" },
      { label: "Contact", link: "/contact" },
    ];

    return (
      <div className="App">
        <Header links={links} logo = {logo} />
        <GrassBanner />
      </div>
    );
  };
}
 

export default App;
