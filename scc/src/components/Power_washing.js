import React, { Component } from "react";
import Header from "./Header";
import Locations from "./Locations";
import Footer from "./Footer";
import "../css/Power_washing.css";

class Power_washing extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="power-wash_banner">
          <div className="power-wash__content">
            <div className="power-wash__text-box">
              <h1 className="power-wash_banner__text power-wash_banner__text--big">
                Power Washing
              </h1>
            </div>
          </div>
        </section>
        <Locations />
        <Footer />
      </div>
    );
  }
}

export default Power_washing;
