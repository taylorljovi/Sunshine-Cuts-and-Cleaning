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
        <section>
          <Request />
        </section>

        {/* <form className="form">
                <label> Name </label>
                <input placeholder="Name" />

                <label> Email </label>
                <input placeholder="Email" />

                <label> Message </label>
                <textarea placeholder="Message" />

                <button type="submit"> Submit </button>
              </form> */}
        <Locations />
        <Footer />
      </div>
    );
  }
}

export default Mowing;
