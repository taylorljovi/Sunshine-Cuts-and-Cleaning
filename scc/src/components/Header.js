import React, { Component } from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
          <nav className="menu">
            <Link to="/">
              <h1 className="menu__logo">SunShine Cuts and Cleaning</h1>
            </Link>
            <div className="menu__right">
              <nav className="menu__list">
                <ul>
                  <li className="menu__list-item menu__link--active">
                    <Link to="/">
                      <a className="menu__link" href="#">
                        {" "}
                        Home{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="menu__list-item menu__link--active">
                    <Link to="/service">
                      <a className="menu__link " href="#">
                        Service and Pricing <span class="arrow">&#x25BC;</span>
                      </a>
                      <ul className="sub_menu">
                        <li>
                          <Link to="/mow">
                            <a className="menu__link " href="#">
                              Mowing
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/power-wash">
                            <a className="menu__link" href="#">
                              {" "}
                              Power Washing{" "}
                            </a>
                          </Link>
                        </li> */}
                      </ul>
                    </Link>
                  </li>
                  <li className="menu__list-item menu__link--active">
                    <Link to="/about">
                      <a className="menu__link" href="#">
                        {" "}
                        About Us{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="menu__list-item menu__link--active">
                    <Link to="contact">
                      <a className="menu__link" href="#">
                        {" "}
                        Contact{" "}
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        );
    }
}

export default Header;


