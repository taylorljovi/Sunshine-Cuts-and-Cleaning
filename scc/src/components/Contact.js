import React, { Component } from 'react';
import Header from "./Header";
import Footer from './Footer';
import Locations from './Locations';
import '../css/Contact.css';

class Contact extends Component {
  render (){
      return (
        <div>
          <Header />
          <div>
            <section className="contact_banner">
              <div className="contact_banner__content">
                <div className="contact_banner__text-box">
                  <h1 className="contact_banner__text contact_banner__text--big">
                    Contact Sunshine!
                  </h1>
                  <h3 className="contact_banner__text contact_banner__text--small">
                    <p>
                      You may request lawn care service by calling us at 314-791-7399.
                    </p>
                    <p>
                      Have a question? Go ahead. Ask us anything! We are always happy
                      to answer your questions.
                    </p>
                    <p>
                      Have you used Sunshine Cuts and Cleaning before and are you
                      happy with our work? Tell us about your experience.
                    </p>
                  </h3>
                </div>
              </div>
            </section>
            <div>
              <h3 className="section_b">
                We are ready and waiting to assist you with your lawn care
                needs.
              </h3>
              <p className="section_c">Sunshine Cuts and Cleaning</p>
              <p className="section_c">Phone: 314-322-4873</p>
              <p className="section_c">Email: jasotjovi@yahoo.com</p>
            </div>
          </div>
          <Locations />
          <Footer />
        </div>
      );
  }
} 


export default Contact;
