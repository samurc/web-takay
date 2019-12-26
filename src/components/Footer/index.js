import React from 'react';
import { LayoutRow, Item, FooterUI, FooterCopyright, SocialItem } from './styles';
import imgLogo from '../../assets/img/logo.png';
import LogoMobile from '../../assets/svg/celular.svg';
import LogoPhone from '../../assets/svg/phone.svg';
import LogoLocation from '../../assets/svg/location.svg';
import LogoLinkedin from '../../assets/svg/in.svg';
import LogoMail from '../../assets/svg/mail.svg';
import imgLogoB from '../../assets/svg/logob.svg';
import LogoMobileB from '../../assets/svg/celularb.svg';
import LogoPhoneB from '../../assets/svg/phoneb.svg';
import LogoLocationB from '../../assets/svg/locationb.svg';
import LogoLinkedinB from '../../assets/svg/inb.svg';
import LogoMailB from '../../assets/svg/mailb.svg';

export default ({ locationName, link }) => {
  let theme;
  let logoImg;
  let logoMobile;
  let logoPhone;
  let logoMail;
  let logoLinkedin;
  let logoLocation;

  const link1 = link[0] || {};
  const link2 = link[1] || {};
  const link3 = link[2] || {};
  const link4 = link[3] || {};

  switch (locationName) {
    case '/experto':
      theme = 'yellow';
      logoImg = imgLogoB;
      logoMobile = LogoMobileB;
      logoPhone = LogoPhoneB;
      logoLocation = LogoLocationB;
      logoMail = LogoMailB;
      logoLinkedin = LogoLinkedinB;
      break;
    default:
      theme = '';
      logoImg = imgLogo;
      logoMobile = LogoMobile;
      logoPhone = LogoPhone;
      logoLocation = LogoLocation;
      logoMail = LogoMail;
      logoLinkedin = LogoLinkedin;
      break;
  }

  return (
    <FooterUI theme={theme}>
      <div className="grid">
        <LayoutRow theme={theme}>
          <Item className="about">
            <img src={logoImg} width={85} height={20} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore voluptatem.
            </p>
          </Item>
          <Item className="contact">
            <h3>Contáctanos</h3>
            <a href={link1.link}>
              <img src={logoMobile} width={16} height={26} className="iconimage"/> {link1.titulo}
            </a>
            <a href={link3.link}>
              <img src={logoPhone} width={16} height={26} className="iconimage"/> {link3.titulo}
            </a>
            <div className="social">
              <SocialItem theme={theme} href={link2.link}>
                <img src={logoMail} width={19} height={16} />
              </SocialItem>
              <SocialItem theme={theme} href={link4.link}>
                <img src={logoLinkedin} width={19} height={16} />
              </SocialItem>
            </div>
          </Item>
          <Item className="location">
            <h3>¿Dónde estamos?</h3>
            <p>
              <img src={logoLocation} width={16} height={26} /> Av. Miguel grau 1227 - Trujillo -
              Trujillo
            </p>
          </Item>
        </LayoutRow>
      </div>
      <FooterCopyright theme={theme}>
        <div className="grid textfila2"> © 2019 Takay - Todos los derechos reservados.</div>
      </FooterCopyright>
    </FooterUI>
  );
};
