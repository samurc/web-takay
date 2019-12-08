import React from 'react';
import {
  Layout,
  LayoutRow,
  Item,
  Name1,
  Cargo1,
  Name2,
  Cargo2,
  Detail,
  Image,
  Text,
  Expert,
  Title,
  Dots,
  Dot
} from './styles';

import experto from '../../assets/img/fotoprueba.png';

const Expertos = props => {
  return (
    <Layout>
      <LayoutRow>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Dots>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </Dots>
          <Title>NUESTROS EXPERTOS</Title>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Elena García</Name1>
            <Cargo1>Maestra de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Elena García</Name2>
            <Cargo2>Maestra de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
      </LayoutRow>
    </Layout>
  );
};

export default Expertos;
