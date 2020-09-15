import React, { Component } from "react";
import "../css/Locations.css";

class Locations extends Component {
    render () {
        return (
          <section className="service-areas">
            <div className="section service-areas-wrapper">
              <h3 className="location__header">
                Sunshine is currently serving the following municipalities.
              </h3>
              <ul className="location_description">
                <li className="place">
                  <p>South County</p>
                </li>
                <li className="place">
                  <p>Fenton</p>
                </li>
                <li className="place">
                  <p>Festus</p>
                </li>
                <li className="place">
                  <p>DeSoto</p>
                </li>
                <li className="place">
                  <p>Hillsboro</p>
                </li>
              </ul>
            </div>
          </section>
        );
    }
}


          
export default Locations