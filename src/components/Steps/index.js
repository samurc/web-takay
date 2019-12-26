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
import foco from '../../assets/svg/focos.svg';
import edificio from '../../assets/svg/edificio.svg';
import terreno from '../../assets/svg/terreno.svg';

const Steps = ({textos}) => {
  const texto1 = textos[3] || {};
  const texto2 = textos[2] || {};
  const texto3 = textos[1] || {};
  const texto4 = textos[0] || {};
  return (
    <Layout>
      <Title>Pasos a seguir</Title>
      <LayoutRow>
        <Item>
          <Head className="initial head">
            <Circle>1</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={texto1.imagen}></Image>
              <Text>{texto1.titulo}</Text>
            </Step>
            <Detail className="detail">
              {texto1.descripcion}
            </Detail>
          </Body>
        </Item>
        <Item>
          <Head className="head">
            <Circle>2</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={texto2.imagen}></Image>
              <Text>{texto2.titulo}</Text>
            </Step>
            <Detail className="detail">
              {texto2.descripcion}
            </Detail>
          </Body>
        </Item>
        <Item>
          <Head className="head">
            <Circle>3</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={texto3.imagen}></Image>
              <Text>{texto3.titulo}</Text>
            </Step>
            <Detail className="detail">
              {texto3.descripcion}
            </Detail>
          </Body>
        </Item>
        <Item>
          <Head className="last head">
            <Circle>4</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={texto4.imagen}></Image>
              <Text>{texto4.titulo}</Text>
            </Step>
            <Detail className="detail">
              {texto4.descripcion}
            </Detail>
          </Body>
        </Item>
      </LayoutRow>
    </Layout>
  );
};

export default Steps;
