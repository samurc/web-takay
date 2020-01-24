import React from 'react';
import { Link } from 'react-router-dom';
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

export default ({ locationName, link, textosPie }) => {
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
  const link6 = link[6] || {};

  const textosPie1 = textosPie[0] || {};
  const textosPie2 = textosPie[1] || {};

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
              {textosPie1.textos}
            </p>
          </Item>
          <Item className="contact">
            <h3>Contáctanos</h3>
            <div className="cellphones">
              <img src={logoMobile} width={16} height={26} className="iconimage"/>
              <div className="cellist">
                <a href={link1.link}>{link1.titulo}</a>
                { link6.link && <a href={link6.link}>{link6.titulo}</a> }  
              </div>
            </div>
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
              <img src={logoLocation} width={16} height={26} /> {textosPie2.textos}
            </p>
          </Item>
        </LayoutRow>
      </div>
      <FooterCopyright theme={theme}>
        <div className="grid textfila2"> © 2019 Takay - Todos los derechos reservados. | <Link to="libro-de-reclamaciones">Libro de reclamaciones</Link></div>
      </FooterCopyright>
    </FooterUI>
  );
};
