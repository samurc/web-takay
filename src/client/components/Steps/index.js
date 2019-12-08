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

const Steps = props => {
  return (
    <Layout>
      <Title>Pasos a seguir</Title>
      <LayoutRow>
        <Item>
          <Head className="initial">
            <Circle>1</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
            <Detail className="detail">
              Júntate con nuestros asesores para entender tus necesidades y saber cómo podemos
              ayudarte.
            </Detail>
          </Body>
        </Item>
        <Item>
          <Head>
            <Circle>2</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
            <Detail className="detail">
              Júntate con nuestros asesores para entender tus necesidades y saber cómo podemos
              ayudarte.
            </Detail>
          </Body>
        </Item>
        <Item>
          <Head>
            <Circle>3</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
            <Detail className="detail">
              Júntate con nuestros asesores para entender tus necesidades y saber cómo podemos
              ayudarte.
            </Detail>
          </Body>
        </Item>
        <Item>
          <Head className="last">
            <Circle>4</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={ladrillos}></Image>
              <Text>¡Empieza tu obra!</Text>
            </Step>
            <Detail className="detail">
              Júntate con nuestros asesores para entender tus necesidades y saber cómo podemos
              ayudarte.
            </Detail>
          </Body>
        </Item>
      </LayoutRow>
    </Layout>
  );
};

export default Steps;
