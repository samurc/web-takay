import React from 'react';
import {
  Layout,
  Title,
  LayoutRow,
  Item,
  Head,
  Circle,
  Body,
  Step,
  Detail,
  Image,
  Text
} from './styles';

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
          <Body>
            <Step className="step">
              <Image src={dinero}></Image>
              <Text>Gana más</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Body>
            <Step className="step">
              <Image src={maso}></Image>
              <Text>Pago justo y completo</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Body>
            <Step className="step">
              <Image src={manos}></Image>
              <Text>Comunidad experta</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Body>
            <Step className="step">
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
