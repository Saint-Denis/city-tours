import React from 'react';
import "./navbar.scss";
import logo from "./images/logo.png"

const Navbar = (params) => {
  return (
      <nav className="navbar">
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
      </nav>
  )
}

export default Navbar;
