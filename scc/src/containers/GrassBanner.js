import React, { Component } from "react";


class GrassBanner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="banner__content">
          <div className="banner__text-box">
            <h1 className="banner__text banner__text--big">
              Sunshine Cuts and Cleaning
            </h1>
            <h2 className="banner__text banner__text--medium">
              Lawn care at your fingertips
            </h2>
            <h3 className="banner__text banner__text--small">
              Convenient, flexible, and reliable.
            </h3>
          </div>
        </div>
      </section>
    );
  }
}

export default GrassBanner;
