import React from 'react';
import Flickity from '../Flickity';
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
      <LayoutRow mode="desktop">
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
            <Name1>Pablo alvarado</Name1>
            <Cargo1>Arquitecto</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Pablo alvarado</Name2>
            <Cargo2>Arquitecto</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item className="titleExperto">
          <Dots>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </Dots>
          <Title>NUESTROS EXPERTOS</Title>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Francisco Cisneros</Name1>
            <Cargo1>Arquitecto</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Francisco Cisneros</Name2>
            <Cargo2>Arquitecto</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Raúl Cisneros</Name1>
            <Cargo1>Maestro de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Raúl Cisneros</Name2>
            <Cargo2>Maestro de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Jamlec Castro</Name1>
            <Cargo1>Maestro de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Jamlec Castro</Name2>
            <Cargo2>Maestro de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Carlos Castro</Name1>
            <Cargo1>Maestro de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Carlos Castro</Name2>
            <Cargo2>Maestro de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Fernando Ramirez</Name1>
            <Cargo1>Maestro de obra</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Fernando Ramirez</Name2>
            <Cargo2>Maestro de obra</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Mariella Ventocilla</Name1>
            <Cargo1>Arquitecta</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Mariella Ventocilla</Name2>
            <Cargo2>Arquitecta</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        <Item>
          <Expert className="expert">
            <Name1>Andrea Gonzalez</Name1>
            <Cargo1>Diseñadora de Interiores</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Andrea Gonzalez</Name2>
            <Cargo2>Diseñadora de Interiores</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
      </LayoutRow>
      
      <LayoutRow mode="mobile">
        <Flickity
          className='flickity-slider'
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            pageDots: false,
            prevNextButtons: false,
          }}
        >
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
              <Name1>Pablo alvarado</Name1>
              <Cargo1>Arquitecto</Cargo1>
              <Image src={experto}></Image>
            </Expert>
            <Detail className="detail">
              <Name2>Pablo alvarado</Name2>
              <Cargo2>Arquitecto</Cargo2>
              <Text>
                Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
                trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
                la construcción.
              </Text>
            </Detail>
          </Item>
          <Item>
            <Expert className="expert">
              <Name1>Francisco Cisneros</Name1>
              <Cargo1>Arquitecto</Cargo1>
              <Image src={experto}></Image>
            </Expert>
            <Detail className="detail">
              <Name2>Francisco Cisneros</Name2>
              <Cargo2>Arquitecto</Cargo2>
              <Text>
                Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
                trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
                la construcción.
              </Text>
            </Detail>
          </Item>
          <Item>
            <Expert className="expert">
              <Name1>Raúl Cisneros</Name1>
              <Cargo1>Maestro de obra</Cargo1>
              <Image src={experto}></Image>
            </Expert>
            <Detail className="detail">
              <Name2>Raúl Cisneros</Name2>
              <Cargo2>Maestro de obra</Cargo2>
              <Text>
                Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
                trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
                la construcción.
              </Text>
            </Detail>
          </Item>
          <Item>
            <Expert className="expert">
              <Name1>Jamlec Castro</Name1>
              <Cargo1>Maestro de obra</Cargo1>
              <Image src={experto}></Image>
            </Expert>
            <Detail className="detail">
              <Name2>Jamlec Castro</Name2>
              <Cargo2>Maestro de obra</Cargo2>
              <Text>
                Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
                trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
                la construcción.
              </Text>
            </Detail>
          </Item>
          <Item>
            <Expert className="expert">
              <Name1>Carlos Castro</Name1>
              <Cargo1>Maestro de obra</Cargo1>
              <Image src={experto}></Image>
            </Expert>
            <Detail className="detail">
              <Name2>Carlos Castro</Name2>
              <Cargo2>Maestro de obra</Cargo2>
              <Text>
                Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
                trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
                la construcción.
              </Text>
            </Detail>
          </Item>
          <Item>
            <Expert className="expert">
              <Name1>Fernando Ramirez</Name1>
              <Cargo1>Maestro de obra</Cargo1>
              <Image src={experto}></Image>
            </Expert>
            <Detail className="detail">
              <Name2>Fernando Ramirez</Name2>
              <Cargo2>Maestro de obra</Cargo2>
              <Text>
                Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
                trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
                la construcción.
              </Text>
            </Detail>
          </Item>
          <Item>
            <Expert className="expert">
              <Name1>Mariella Ventocilla</Name1>
              <Cargo1>Arquitecta</Cargo1>
              <Image src={experto}></Image>
            </Expert>
            <Detail className="detail">
              <Name2>Mariella Ventocilla</Name2>
              <Cargo2>Arquitecta</Cargo2>
              <Text>
                Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
                trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
                la construcción.
              </Text>
            </Detail>
          </Item>
          <Item>
          <Expert className="expert">
            <Name1>Andrea Gonzalez</Name1>
            <Cargo1>Diseñadora de Interiores</Cargo1>
            <Image src={experto}></Image>
          </Expert>
          <Detail className="detail">
            <Name2>Andrea Gonzalez</Name2>
            <Cargo2>Diseñadora de Interiores</Cargo2>
            <Text>
              Arquitecto colegiado. Ubicado en Trujillo con 5 años de experiencia profesional, ha
              trabajado en múltiples proyectos en la ciudad con reconocidas empresas del sector de
              la construcción.
            </Text>
          </Detail>
        </Item>
        </Flickity>
      </LayoutRow>
    </Layout>
  );
};

export default Expertos;
