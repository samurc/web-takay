import React from 'react';
import { Article, Col1, Col1Inner, Col2, Col2Inner } from './styles';

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
            backgroundImage: `url('https://img.freepik.com/foto-gratis/trabajador-industrial-albanil-instalando-mamposteria-ladrillo-espatula-sitio-construccion_33835-1136.jpg')`
          }}
        />
      </Col2>
    </Article>
  );
};

export default Socio;
