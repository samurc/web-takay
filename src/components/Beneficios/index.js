import React from 'react';
import { Layout, Title, LayoutRow, Item, Body, Step, Detail, Image, Text } from './styles';

import dinero from '../../assets/svg/dinero.svg';
import maso from '../../assets/svg/maso.svg';
import manos from '../../assets/svg/manos.svg';
import tuerca from '../../assets/img/tuerca.png';

const Beneficios = props => {
  return (
    <Layout>
      <Title>¿QUÉ BENEFICIOS OBTIENES AL SER PARTE DE TAKAY PRO?</Title>
      <LayoutRow>
        <Item>
          <Detail className="detail">
            Accede a nuestra red de confianza, conoce nuevos clientes que están en búsqueda de
            expertos como tú y obtén proyectos de construcción confiables.
          </Detail>
          <Body className="step">
            <Step>
              <Image src={dinero}></Image>
              <Text>Gana más</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Detail className="detail">
            Recibe un pago de acuerdo al trabajo de calidad que realizas y recibe la totalidad del
            mismo. En Takay nos encargaremos de gestionar los pagos y cobranzas por ti.
          </Detail>
          <Body className="step">
            <Step>
              <Image src={maso}></Image>
              <Text>Pago justo y completo</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Detail className="detail">
            Serás parte de una comunidad experta dispuesta a apoyarte y resolver cualquier duda que
            tengas. Además podrás disfrutar de los eventos exclusivos para nuestros expertos.
          </Detail>
          <Body className="step">
            <Step>
              <Image src={manos}></Image>
              <Text>Comunidad experta</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Detail className="detail">
            Dedícate a hacer lo que mejor sabes. Te damos herramientas para ayudarte a gestionar las
            diferentes etapas del proyecto.
          </Detail>
          <Body className="step">
            <Step>
              <Image src={tuerca}></Image>
              <Text>Herramientas útiles</Text>
            </Step>
          </Body>
        </Item>
      </LayoutRow>
    </Layout>
  );
};

export default Beneficios;
