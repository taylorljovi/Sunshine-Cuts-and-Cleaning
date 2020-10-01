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
        <section>
          <div className="container">
            <div className="span5">
              <h2> Core Aeration Treatment </h2>
                <p>
                  "Core aeration is an important practice to provide your
                  lawn with the ultimate care. An aerated lawn will help control 
                  thatch, improve soil, improve root growth, and open airways 
                  for water and fertilizer to reach the lawn's root system."
                </p>
              <div className= "line">               
              </div>

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
