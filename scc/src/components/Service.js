import React, { Component } from "react";
// import "./App.css";
import Header from "./Header";
import Locations from "./Locations";
import Footer from "./Footer"
import "../css/Service.css";
import { Link } from "react-router-dom";
import Scroll_to_top_button from './Scroll_to_top_button';

class Service extends Component {
  render() {
    return (
      <div>
        <Header />
        <Scroll_to_top_button/>
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
                <h2>
                  <img className="align_center_lawn" width="500" height="335" >
                  </img>
                </h2>
                <h2> Custom Lawn Care </h2>
                  <p> We pride ourselves on our ability to make your lawn look
                      its best. All mowing services include string trimming and blowing
                      of clippings creating a clean fresh look.
                  </p>
              <ul>
                <Link className="quote_link" to="/contact">
                  Get a Quote
                    </Link>
              </ul>
              <div className="line"></div>
                <h2>
                  <img className="align_center_wash" width="500" height="335" >
                  </img>
                </h2>
                <h2> Power Washing</h2>
                  <p> All kinds of exteriors should be washed and removed the accumulation
                      of mold, mildew, loose dirt, dust, and spider webs, ect. Have your house,
                      deck, driveway, pool area or patios pressure washed by professionals.
                  </p>
              <ul>
                <Link className="quote_link" to="/contact">
                  Get a Quote
                    </Link>
              </ul>
              <div className="line"></div>
                <h2>
                  <img className="align_center_gutter" width="270" height="183" >
                  </img>
                </h2>
                <h2> Gutter Cleaning </h2>
                  <p> When's the last time you were on your roof? Unfortunately it seems
                      the only time you notice your gutters need to be cleaned is while it's 
                      raining. Let us help protect your home from the damaging effects water 
                      can have by cleaning your gutters on a regular basis.
                  </p>
              <ul>
                <Link className="quote_link" to="/contact">
                  Get a Quote
                    </Link>
              </ul>
              <div className="line"> </div>
                <h2>
                  <img className="align_center_wall" width="500" height="335" >
                  </img>
                </h2>
                <h2> Retaining Walls</h2>
                  <p> We install retaining walls for homes and businesses. They can help stop
                      erosion, level out yards, or help to create raised garden and landscaping
                      beds.
                  </p>
              <ul>
                <Link className="quote_link" to="/contact">
                  Get a Quote
                    </Link>
              </ul>
              <div className="line"> </div>
                <h2>
                  <img className="align_center_snow" width="300" height="165" >
                  </img>
                </h2>
                <h2> Snow Removal</h2>
                  <p> Servicing commercial and residential properties, we will keep your 
                      driveway, sidewalks, and steps clear of snow. 
                  </p>
                  <ul>
                    <Link className="quote_link" to="/contact">
                      Get a Quote
                    </Link>
                  </ul>
            </div>
          </div>
            <div className="span5-last">
                <h2>
                  <img className="align_center_mulch" width="500" height="335" >
                  </img>
                </h2>
                  <h2> Mulch & Decorative Rock Installation</h2>
                    <p> Let us shovel it for you! Take back your weekend and let us install
                      the mulch or decorative rock of your choice.
                  </p>
            <ul>
              <Link className="quote_link" to="/contact">
                Get a Quote
                    </Link>
            </ul>
              <div className="line"></div>
            <h2>
              <img className="align_center_aeration" width="500" height="335" >
              </img>
            </h2>
                <h2> Core Aeration Treatment </h2>
                  <p> Core aeration is an important practice to provide your
                      lawn with the ultimate care. An aerated lawn will help control
                      thatch, improve soil, improve root growth, and open airways
                      for water and fertilizer to reach the lawn's root system.
                  </p>
            <ul>
              <Link className="quote_link" to="/contact">
                Get a Quote
                    </Link>
            </ul>
              <div className="line"> </div>  
                <h2>
                  <img className="align_center_bed" width="500" height="335" >
                  </img>
                </h2>         
                <h2> Landscape & Flower Bed Maintenance</h2>
                  <p> Our goal is to keep any flower beds or landscape healthy, clean,
                      safe and attractive. Proper care will keep your flowers, shrubs, and
                      bushes as fresh as the day you planted them.
                  </p>
            <ul>
              <Link className="quote_link" to="/contact">
                Get a Quote
                    </Link>
            </ul>
              <div className="line"></div>
                <h2>
                  <img className="align_center_clean_up" width="260" height="180" >
                  </img>
                </h2>     
                <h2> Spring & Fall Clean up</h2>
                  <p> We have the ability to rake ro blow to remove leaves and grass clippings 
                      from your lawn, landscaping or flower beds in the spring or fall seasons. 
                  </p>
            <ul>
              <Link className="quote_link" to="/contact">
                Get a Quote
                    </Link>
            </ul>
              <div className="line"></div>
            </div>
        </section>

        <Locations />
        <Footer />
      </div>
    );
  }
}

export default Service;
