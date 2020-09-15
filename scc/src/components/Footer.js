import React, { Component } from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
              <div className="section">
                <div className="contact-info">
                  <Link className="logo" to="/">
                    SunShine Cuts and Cleaning
                  </Link>
                  <p>314-791-7399</p>
                  <p>JasontJovi@yahoo.com</p>
                </div>
                <nav className="footer-nav">
                  <ul className="footer-nav-list footer-nav-list--1">
                    <li className="footer-footer-nav-item ex">
                      <Link className="footer-nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="footer-footer-nav-item">
                      <Link
                        className="footer-nav-style"
                        className="footer-nav-link"
                        to="/contact"
                      >
                        Help
                      </Link>
                    </li>
                  </ul>
                  <ul className="footer-nav-list footer-nav-list--3">
                    <li className="footer-nav-item">
                      <Link className="footer-nav-link" to="#">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link className="footer-nav-link" to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </li>
                  </ul>
                </nav>
                <p className="copyright">Copyright © 2020</p>
              </div>
            </footer>

        );
    }
}

export default Footer;
