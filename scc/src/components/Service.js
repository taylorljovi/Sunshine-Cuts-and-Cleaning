import React, { Component } from "react";
// import "./App.css";
import Header from "./Header";
import Locations from "./Locations";
import Footer from "./Footer"
import "../css/Service.css";

class Service extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="service_banner">
          <div className="service_banner__content">
            <div className="service_banner__text-box">
              <h1 className="service_banner__text service_banner__text--big">
                Service & pricing
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

export default Service;
