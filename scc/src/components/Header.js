import React, { Component } from 'react';
import Dropdown from './Dropdown';


class Header extends Component {
    render() {
       
        let linksMarkup = this.props.links.map((link, index)  => {
            let linksMarkup = link.active ? (
                <a className="menu__link menu__link--active" href="link.link"> {link.label}</a>
            ) : (
                    <a className="menu__link" href="link.link"> {link.label}</a>
            );
        return (
            <li key={index} className = "menu__list-item" > 
               {linksMarkup}
            </li>
            );
        });
        
        {/* <li className="menu__list-item"><a className="menu__link" href="#">Service and Pricing</a></li>
        <li className="menu__list-item"><a className="menu__link" href="#">About Us</a></li>
        <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li> */}
        
        return(
            <nav className="menu">
                <h1 className="menu__logo">SunShine Cuts and Cleaning</h1>
                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Header;


