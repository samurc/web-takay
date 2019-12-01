/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className="navbar-fixed">
      <nav className="orange">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              TAKAY
            </a>
            <a href="javascript:void(0)" onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul id="slide-out" className="sidenav" style={menuOpen ? stylesOpen : null}>
              <li>
                <a className="subheader">TAKAY</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/familia" className="item" onClick={toggleMenu}>
                  FAMILIA
                </Link>
              </li>
              <li>
                <Link to="/experto" className="item" onClick={toggleMenu}>
                  EXPERTO
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="item" onClick={toggleMenu}>
                  NOSOTROS
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/familia" className="item">
                  FAMILIA
                </Link>
              </li>
              <li>
                <Link to="/experto" className="item">
                  EXPERTO
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="item">
                  NOSOTROS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
