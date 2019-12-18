import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarFixed, Nav, NavWrapper, SidenavOverlay, SideNav, NavList } from './styles';
import LogoTakay from '../../assets/svg/takay_header.svg';
import LogoTakayOr from '../../assets/svg/takay_header_or.svg';

const Header = ({ locationName }) => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  let colorNav;
  let logoTakay;
  switch (locationName) {
    case '/familia':
      colorNav = 'white';
      logoTakay = LogoTakayOr;
      break;
    case '/experto':
      colorNav = 'yellow';
      logoTakay = LogoTakay;
      break;
    case '/nosotros':
      colorNav = 'orange';
      logoTakay = LogoTakay;
      break;
    default:
      colorNav = 'orange';
      logoTakay = LogoTakay;
      break;
  }

  return (
    <NavbarFixed>
      <Nav color={colorNav}>
        <div className="grid">
          <NavWrapper>
            <Link to="/" className="brand-logo">
              <img src={logoTakay} width={80} height={20} alt="Logo Takay" />
            </Link>
            <a onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <SidenavOverlay
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <SideNav id="slide-out" className="sidenav" style={menuOpen ? stylesOpen : null}>
              <li>
                <Link to="/" className="subheader">
                  TAKAY
                </Link>
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
                <Link
                  to="/familia"
                  className={`item ${locationName == '/familia' ? 'active' : ''}`}
                >
                  FAMILIA
                </Link>
              </li>
              <li>
                <Link
                  to="/experto"
                  className={`item ${locationName == '/experto' ? 'active' : ''}`}
                >
                  EXPERTO
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className={`item ${locationName == '/nosotros' ? 'active' : ''}`}
                >
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
