import React from 'react';
import { LayoutRow, Item } from './styles';
import imgLogo from '../../assets/img/logo.png';

export default () => {
  return (
    <footer className="page-footer">
      <div className="grid">
        <LayoutRow>
          <Item className="about">
            <img src={imgLogo} width={85} height={20} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </Item>
          <Item className="contact">
            <h3>Contáctanos</h3>
            <p>987648935</p>
            <p>01 - 3590844</p>
            <div className="social"></div>
          </Item>
          <Item className="location">
            <h3>¿Dónde estamos?</h3>
            <p>Av. Miguel grau 1227 - Trujillo - Trujillo</p>
          </Item>
        </LayoutRow>
      </div>
      <div className="footer-copyright">
        <div className="grid">© 2019 Lorem ipsum</div>
      </div>
    </footer>
  );
};
