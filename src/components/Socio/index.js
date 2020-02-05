import React from 'react';
import { Article, Col1, Col1Inner, Col2, Col2Inner } from './styles';
import obreros1 from '../../assets/img/experto1.png';
const Socio = ({ textos }) => {
  const texto1 = textos[0] || {};
  return (
    <Article>
      <Col1>
        <Col1Inner>
          <h1>{texto1.titulo}</h1>
        </Col1Inner>
      </Col1>
      <Col2>
        <Col2Inner
          style={{
            backgroundImage: `url(${texto1.imagen})`
          }}
        />
      </Col2>
    </Article>
  );
};

export default Socio;
