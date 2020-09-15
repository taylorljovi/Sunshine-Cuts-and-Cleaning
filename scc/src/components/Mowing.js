import React, { Component } from "react";
import Header from "./Header";
import Locations from "./Locations";
import Footer from "./Footer";
import "../css/Mowing.css";

class Mowing extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="mowing_banner">
          <div className="mowing__content">
            <div className="mowing__text-box">
              <h1 className="mowing_banner__text mowing_banner__text--big">
                Mowing
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

export default Mowing;
