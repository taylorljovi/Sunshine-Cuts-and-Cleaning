import React, { Component } from "react";
import "../css/Sub_main.css"

class Sub_main extends Component {
    render() {
        return (
            <div >
              <section className="main_sub_banner">
                    <div className="main_sub_banner__content">
                        <div className="main_sub_banner__text-box">
                            <h1 className="main_sub_banner__text main_sub_banner__text--medium">
                                Always Delivering
                            </h1>
                            <h2 className="main_sub_banner__text main_sub_banner__text--big">
                                Superior Service.
                            </h2>
                            <h2 className="main_sub_banner__text main_sub_banner__text--big">
                                Stunning Results.
                            </h2>
                            <h3 className="main_sub_banner__text main_sub_banner__text--small">
                                Our reputation speaks for itself. Besides our amazing customer 
                                service, we're known for delivering stunning results in every service
                                we preform. whether we handle your bi-weekly mowing or  design and 
                                install new landscaping, we take it to the next level to ensure every 
                                customer raves about our lawn care services.
                          </h3>
                    </div>
                  </div>
              </section>
              <div className="row">
                <h3> Take a look at some of our work on our Facebook site</h3>
                <h3> or fill out a quote form click below.</h3>
                    <a className="button1" href="https://www.facebook.com/SunshineCutsAndCleaning"> Facebook </a>
                <a className= "button2" href ="./Contact"> get a free quote</a>
               </div>
              </div>
 
        );
    }
}

export default Sub_main;
