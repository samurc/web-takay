import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarFixed, Nav, NavWrapper, SidenavOverlay, SideNav, NavList } from './styles';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <NavbarFixed>
      <Nav color="orange">
        <div className="container">
          <NavWrapper>
            <a href="/" className="brand-logo">
              TAKAY
            </a>
            <a onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <SidenavOverlay
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <SideNav id="slide-out" className="sidenav" style={menuOpen ? stylesOpen : null}>
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
            </SideNav>
            <NavList id="nav" className="right hide-on-med-and-down">
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
            </NavList>
          </NavWrapper>
        </div>
      </Nav>
    </NavbarFixed>
  );
};

export default Header;
