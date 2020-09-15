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
        <section className="about_banner">
          <div className="about__content">
            <div className="about__text-box">
              <h1 className="about_banner__text about_banner__text--big">
                About Us
              </h1>
            </div>
          </div>
        </section>
        <section className="about_description_box">
          <div className="about_description">
            <h2>Locally Owned and Family Operated</h2>
            <p>
              Summertime in Missouri is a time to be outside and enjoy all that
              nature has to offer. Sunshine Cuts and Cleaning is hard at work to
              make that experience come to life. Many of our competitors focus
              on generating higher revenue, resulting in unnecessary
              applications and lower levels of customer service. For this
              reason, Sunshine Lawn Service offers a customer friendly
              experience, which provides results far exceeding expectations. No
              matter what your lawn service needs may be, Sunshine Cuts and
              Cleaning has the solution.
            </p>
            <h2>Our Guarantee to You</h2>
            <p>
              At Sunshine Lawn Service our level of commitment has no limit and
              we back it up with our 100% Service Guarantee. After all, it’s
              only fair to hold ourselves to the same level of service
              excellence that we measure in others.
            </p>
          </div>
        </section>
        <section className="about_description_box-2">
          <div>
            <div className="picture_box">
              <h2>
                <image className="about_photo"></image>
              </h2>
              <div className="thank_you">
                <h2>Thank You to Our Customers</h2>
                <p>
                  I wanted to take this opportunity to thank you for supporting
                  out lawn care business throughout the year. We're especially
                  grateful for your support during these difficult times. We at
                  Sunshine Cuts and Cleaning really do value your business and
                  look forward to working with you in the rest of 2020 and on to
                  the next years.
                </p>
                <p>Sincerely,</p>
                <p>Jason T Jovi</p>
                <p>Sunshine Cuts and Cleaning</p>
              </div>
            </div>
            {/* <div className="thank_you"></div> */}
          </div>
        </section>
        {/* <section></section> */}

        <Locations />
        <Footer />
      </div>
    );
  }
}

export default About;
