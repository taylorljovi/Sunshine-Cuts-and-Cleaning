import React, { Component } from "react";
// import "./App.css";
import Header from "./Header";
import Locations from "./Locations";
import Footer from "./Footer"

class Service extends Component {
  render() {
    return (
      <div>
        <Header />
        <Locations />
        <Footer />
      </div>
    );
  }
}

export default Service;
