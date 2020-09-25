import React, { Component } from "react";
import Header from "./Header";
import Locations from "./Locations";
import Footer from "./Footer";
import Request from "./Request";
import "../css/Mowing.css";
// import "../css/Contact_form.css";
// import {db} from '../components/Firebase';

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
        <section className="details_container">
          <div>
            <h1 className="details_mowing">
              Lawn maintenance service for residential and commercial properties
              in South County and near by Missouri areas.
            </h1>
            <h2 className="details_mowing2">
              {" "}
              Our lawn maintenance includes mowing, string-trimming, blowing,
              and more.
            </h2>
            <p>
              <image className="mowing_photo mowing_photo"></image>
            </p>
            <p className="details_mowing3">
              We are committed to enhancing our clients' most important
              investment by exceeding their lawn service needs with reliability
              and value. Imagine quality family time, rest, and relaxation, and
              leaving the dirty work to us.
            </p>
            <p className="details_mowing3">
              Your business is just as important as ours. Like any other turf,
              the lawn around your business requires attention and service. Our
              flexibility and ability to customize a lawn care program for your
              property allows your business to make a great first impression.
            </p>
            <h2 className="details_mowing3">
              We pride ourselves on our ability to make your lawn look its best.
              All mowing services include sting-trimming, blowing aor all
              clippings creating a clean fresh look.
            </h2>            
          </div>
          <Request />
        </section>
       
        <Locations />
        <Footer />
      </div>
    );
  }
}

export default Mowing;
