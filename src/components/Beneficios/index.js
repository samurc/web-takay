import React from 'react';
import { Layout, Title, LayoutRow, Item, Body, Step, Detail, Image, Text } from './styles';

import dinero from '../../assets/svg/dinero.svg';
import maso from '../../assets/svg/maso.svg';
import manos from '../../assets/svg/manos.svg';
import tuerca from '../../assets/img/tuerca.png';

const Beneficios = ({textos}) => {
  const texto1 = textos[0] || {};
  const texto2 = textos[1] || {};
  const texto3 = textos[2] || {};
  const texto4 = textos[3] || {};

  return (
    <Layout>
      <Title>¿QUÉ BENEFICIOS OBTIENES AL SER PARTE DE TAKAY PRO?</Title>
      <LayoutRow>
        <Item>
          <Detail className="detail">
            {texto1.descripcion}
          </Detail>
          <Body className="step">
            <Step>
              <Image src={texto1.imagen}></Image>
              <Text>{texto1.titulo}</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Detail className="detail">
            {texto2.descripcion}
          </Detail>
          <Body className="step">
            <Step>
              <Image src={texto2.imagen}></Image>
              <Text>{texto2.titulo}</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Detail className="detail">
            {texto3.descripcion}
          </Detail>
          <Body className="step">
            <Step>
              <Image src={texto3.imagen}></Image>
              <Text>{texto3.titulo}</Text>
            </Step>
          </Body>
        </Item>
        <Item>
          <Detail className="detail">
            {texto4.descripcion}
          </Detail>
          <Body className="step">
            <Step>
              <Image src={texto4.imagen}></Image>
              <Text>{texto4.titulo}</Text>
            </Step>
          </Body>
        </Item>
      </LayoutRow>
    </Layout>
  );
};

export default Beneficios;
