import React from 'react';
import { LayoutRow, Item, FooterCopyright } from './styles';
import imgLogo from '../../assets/img/logo.png';

export default () => {
  return (
    <footer className="page-footer">
      <div className="grid">
        <LayoutRow>
          <Item className="about">
            <img src={imgLogo} width={85} height={20} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore voluptatem.
            </p>
          </Item>
          <Item className="contact">
            <h3>Contáctanos</h3>
            <p>
              <i className="material-icons">phone_iphone</i> 987648935
            </p>
            <p>
              <i className="material-icons">phone</i> 01 - 3590844
            </p>
            <div className="social"></div>
          </Item>
          <Item className="location">
            <h3>¿Dónde estamos?</h3>
            <p>Av. Miguel grau 1227 - Trujillo - Trujillo</p>
          </Item>
        </LayoutRow>
      </div>
      <FooterCopyright>
        <div className="grid">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </FooterCopyright>
    </footer>
  );
};
