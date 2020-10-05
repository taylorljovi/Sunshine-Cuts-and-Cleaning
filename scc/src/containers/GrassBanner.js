import React, { Component } from "react";


class GrassBanner extends Component {
  render() {
    return (
      <main>
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
        <section className="section benefit-statements">
          <h2 className="section__header">
            Professional Lawn Mowing &amp; Whenever You Need It
          </h2>
          <p className= "section_description">
            Sunshine Cuts and Cleaning is a company that connects
            homeowners and property managers with a local contractor. Sunshine
            Cuts and Cleans uses technology to simplify your experience to order
            lawn care services throughout the year.
          </p>
          <div className="statements">
            <div className="statement">
              <h3 className="subtitle">Convenient</h3>
              <ul>
                <li>Simple ordering process on website or phone</li>
                <li>View photos of your property for each job</li>
              </ul>
            </div>
            <div className="statement">
              <h3 className="subtitle">Reliable</h3>
              <ul>
                <li>Vetted and insured local company</li>
                <li>Complete satisfaction guarantee</li>
              </ul>
            </div>
            <div className="statement">
              <h3 className="subtitle">Flexible</h3>
              <ul>
                <li>Flexible, recurring plans that never lock you in</li>
                <li>Competitive rates based on fair market pricing</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default GrassBanner;
