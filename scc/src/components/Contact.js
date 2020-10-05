import React, { Component } from 'react';
import Header from "./Header";
import Footer from './Footer';
import Locations from './Locations';
import Request from './Request';
import '../css/Contact.css';
import Scroll_to_top_button from './Scroll_to_top_button';

class Contact extends Component {
  render (){
      return (
        <div>
          <Header />
          <Scroll_to_top_button />
          <div>
            <section className="contact_banner">
              <div className="contact_banner__content">
                <div className="contact_banner__text-box">
                  <h1 className="contact_banner__text contact_banner__text--big">
                    Contact Sunshine!
                  </h1>
                  <h3 className="contact_banner__text contact_banner__text--small">
                    <p>
                      You may request lawn care service by calling us at
                      314-791-7399.
                    </p>
                  </h3>
                </div>
              </div>
            </section>
            <section>
              <div>
                <h3 className="section_b">
                  We are ready and waiting to assist you with your lawn care
                  needs.
                </h3>
                <p className="section_c">Sunshine Cuts and Cleaning</p>
                <p className="section_c"> 1675 Harness Road Festus, MO 63028</p>
                <p className="section_c">Phone: 314-322-4873</p>
                <p className="section_c">Email: jasotjovi@yahoo.com</p>
              </div>
            </section>
            <section>
              <div>
                <h2 className="section_d">Get Additional Information</h2>
                <p className="details_contact2">
                  {" "}
                  Please fill out the information over to the right if you are
                  interested in a FREE quote, or simply have a few questions
                  you'd like answered:
                </p>
                <p>
                  <image className="contact_photo contact_photo_box"></image>
                </p>
                <p className="details_contact3">
                  Have a question? Go ahead. Ask us anything! We are always
                  happy to answer your questions.
                </p>
                <p className="details_contact3">
                  Have you used Sunshine Cuts and Cleaning before and are you
                  happy with our work? Tell us about your experience.
                </p>
              </div>
            </section>
          </div>
          <Request />
          <Locations />
          <Footer />
        </div>
      );
  }
} 


export default Contact;
