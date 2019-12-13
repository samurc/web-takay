import React from 'react';
import { Article, Col1, Col1Inner, Col2, Col2Inner } from './styles';
import obreros1 from '../../assets/img/experto1.png';
const Socio = () => {
  return (
    <Article>
      <Col1>
        <Col1Inner>
          <h1>Takay es tu socio para construir mejor y lograr el reconocimiento que mereces</h1>
        </Col1Inner>
      </Col1>
      <Col2>
        <Col2Inner
          style={{
            backgroundImage: `url({obreros1})`
          }}
        />
      </Col2>
    </Article>
  );
};

export default Socio;
