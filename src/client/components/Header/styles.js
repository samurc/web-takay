import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const NavbarFixed = styled.div`
  position: relative;
  height: 5.6rem;
  z-index: 997;

  @media only screen and (min-width: 601px) {
    height: 6.4rem;

    nav,
    nav .nav-wrapper i,
    nav a.sidenav-trigger,
    nav a.sidenav-trigger i {
      height: 64px;
      line-height: 64px;
    }
  }
  @media only screen and (min-width: 993px) {
    nav a.sidenav-trigger {
      display: none;
    }
  }
`;
export const Nav = styled.nav`
  position: fixed;
  color: #fff;
  width: 100%;
  height: 5.6rem;
  line-height: 5.6rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  ${props =>
    props.color == 'orange' &&
    css`
      background-color: #f15a22;
    `};

  .brand-logo {
    position: absolute;
    color: #fff;
    display: inline-block;
    font-size: 2.1rem;
    font-weight: bold;
    padding: 0;
  }
  .sidenav-trigger {
    float: left;
    position: relative;
    z-index: 1;
    height: 56px;
    margin: 0 18px;
    i {
      height: 56px;
      line-height: 56px;
      display: block;
      font-size: 2.4rem;
    }
  }
  ul li {
    transition: background-color 0.3s;
    float: left;
    padding: 0;
  }
  ul a {
    transition: background-color 0.3s;
    font-size: 1.4rem;
    color: #fff;
    display: block;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  @media only screen and (max-width: 992px) {
    .brand-logo {
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .hide-on-med-and-down {
      display: none !important;
    }
  }
`;
export const NavWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const SidenavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 997;
  display: none;
`;

export const SideNav = styled.ul`
  position: fixed;
  width: 300px;
  left: 0;
  top: 0;
  margin: 0;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  height: 100%;
  height: calc(100% + 60px);
  height: -moz-calc(100%);
  padding-bottom: 60px;
  background-color: #fff;
  z-index: 999;
  overflow-y: auto;
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  li {
    float: none !important;
    line-height: 48px;
    > a {
      color: rgba(0, 0, 0, 0.87);
      display: block;
      font-size: 14px;
      font-weight: 500;
      height: 48px;
      line-height: 48px;
      padding: 0 32px;
    }
  }
  .divider {
    margin: 8px 0 0 0;
    height: 1px;
    overflow: hidden;
    background-color: #e0e0e0;
  }
  .subheader {
    cursor: initial;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
  }
`;

export const NavList = styled.ul`
  @media only screen and (min-width: 993px) {
    a.item {
      font-weight: bold;
      padding: 0 10rem;
    }
  }
`;
