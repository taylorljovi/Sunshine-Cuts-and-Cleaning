import React, { Component } from "react";
import Header from "./Header";
import Locations from "./Locations";
import Footer from "./Footer";
import "../css/About.css"

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <image className="contact_photo">Sunshine</image>

        <Locations />
        <Footer />
      </div>
    );
  }
}

export default About;
