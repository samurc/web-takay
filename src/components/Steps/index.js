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
              <Image src={foco}></Image>
              <Text>Cuéntanos sobre tu proyecto</Text>
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
              <Image src={terreno}></Image>
              <Text>Enseñanos tu terreno</Text>
            </Step>
            <Detail className="detail">
              Te contactamos con los mejores expertos según tus necesidades y tipo de proyecto.
              Recíbenos en tu terreno para tomar medidas y evaluar el espacio y sus condiciones.
            </Detail>
          </Body>
        </Item>
        <Item>
          <Head>
            <Circle>3</Circle>
          </Head>
          <Body>
            <Step className="step">
              <Image src={edificio}></Image>
              <Text>Te presentamos tu proyecto</Text>
            </Step>
            <Detail className="detail">
              El equipo te presentará el diseño y proyecto que han desarrollado para ti. Una vez
              aceptado podremos acordar la formar de pago y el cronograma de obra
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
