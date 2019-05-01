import React from 'react';
import "./navbar.scss";
import logo from "./images/logo.png"

const Navbar = (params) => {
  return (
      <nav className="navbar">
        <div className="navbar__inner">
            <img src={logo} alt="city tours logo"/>
            <ul className="navbar__links">
              <li className="navbar__item">
                <a href="/" className="navbar__link">Домой</a>
              </li>
              <li className="navbar__item">
                <a href="/" className="navbar__link">О нас</a>
              </li>
              <li className="navbar__item">
                <a href="/" className="navbar__link">Туры</a>
              </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar;
