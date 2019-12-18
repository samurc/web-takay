import React, { Fragment } from 'react';
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
  const lista = Object.values(props.lista)
  return (
    <Layout>
      <LayoutRow mode="desktop">
        { lista.map(function(d, idx){
          return (
            <Fragment key={d.keyunico}>
              { idx === 2 && (
                <Item className="titleExperto">
                  <Dots>
                    <Dot></Dot>
                    <Dot></Dot>
                    <Dot></Dot>
                  </Dots>
                  <Title>NUESTROS EXPERTOS</Title>
                </Item>  
              )}
              <Item>
                <Expert className="expert">
                  <Name1>{d.titulo}</Name1>
                  <Cargo1>Maestra de obra</Cargo1>
                  <Image src={`http://takaycms.wordlatin.com/upload/img/nuestrosexpertos/${d.imagen}`}></Image>
                </Expert>
                <Detail className="detail">
                  <Name2>{d.titulo}</Name2>
                  <Cargo2>Maestra de obra</Cargo2>
                  <Text>
                    {d.descripcion}
                  </Text>
                </Detail>
              </Item>
            </Fragment>
          )
        })}
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
          {lista.map(function(d, idx){
            return (
              <Item key={d.keyunico}>
                <Expert className="expert">
                  <Name1>{d.titulo}</Name1>
                  <Cargo1>Maestra de obra</Cargo1>
                  <Image src={`http://takaycms.wordlatin.com/upload/img/nuestrosexpertos/${d.imagen}`}></Image>
                </Expert>
                <Detail className="detail">
                  <Name2>{d.titulo}</Name2>
                  <Cargo2>Maestra de obra</Cargo2>
                  <Text>
                    {d.descripcion}
                  </Text>
                </Detail>
              </Item>
            )
          })}

          
        </Flickity>
      </LayoutRow>
    </Layout>
  );
};

export default Expertos;
