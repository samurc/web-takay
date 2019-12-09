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

import ladrillos from '../../assets/svg/ladrillos.svg';

const Beneficios = props => {
  return (
    <Layout>
      <Title>¿QUÉ BENEFICIOS OBTIENES AL SER PARTE DE TAKAY PRO?</Title>
      <LayoutRow>
        <Item>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
          </Body>
        </Item>
      </LayoutRow>
    </Layout>
  );
};

export default Beneficios;
