import React, { Component } from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
          <nav className="menu">
            <h1 className="menu__logo">SunShine Cuts and Cleaning</h1>
            <div className="menu__right">
              <nav className="menu__list">              
                  <li className="menu__list-item">
                   <Link to="/">
                    <a className="menu__link menu__link--active" href="#">
                      Home
                    </a>
                   </Link>
                  </li>
                  <li className="menu__list-item">
                   <Link to="/service">
                    <a className="menu__link" href="#">
                      Service and Pricing
                      <span class="arrow">&#x25BC;</span>
                    </a>
                    <ul class="sub_menu">
                      <li className="sub_menu_list-item">
                        <a className="menu__link" href="#">
                          Mowing
                        </a>
                      </li>
                      <li className="sub_menu_list-item">
                        <a className="menu__link" href="#">
                          {" "}
                          Power Washing
                        </a>
                      </li>
                      <li className="sub_menu_list-item">
                        <a className="menu__link" href="#">
                          Tree and Bush Service
                        </a>
                      </li>
                    </ul>
                   </Link>
                 </li>
                 <li className="menu__list-item">
                  <Link to="/about">
                    <a className="menu__link" href="#">
                      About Us
                    </a>
                  </Link>
                 </li>
                 <li className="menu__list-item">
                  <Link to="contact">
                    <a className="menu__link" href="#">
                      Contact
                    </a>
                  </Link>
                 </li>
              </nav>
            </div>
          </nav>
        );
    }
}

export default Header;


