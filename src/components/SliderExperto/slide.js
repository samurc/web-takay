import React from 'react';
import {
  SlideUI,
  Article,
  Col1,
  Col1Inner,
  Col2,
  Col2Inner,
  Button,
  Dots,
  Dot
} from './styles-slide';

const Slide = ({ data, arrayCount, order, handleGoSlide, theme }) => {
  const { titulo, imagen } = data;

  const arrDots = [];
  for (let i = 0; i < arrayCount; i++) {
    arrDots.push(
      <Dot
        key={i}
        theme={theme}
        onClick={() => handleGoSlide(i)}
        className={i === order ? 'active' : ''}
      >
        {i + 1}
      </Dot>
    );
  }

  return (
    <SlideUI className="slide">
      <Article>
        <Col1>
          <Col1Inner theme={theme}>
            <h1>{titulo}</h1>
            <Button theme={theme}>
              <a href={'#verformulario'}>{'Inicia ahora'}</a>
            </Button>
            <Dots>{arrDots}</Dots>
          </Col1Inner>
        </Col1>
        <Col2>
          <Col2Inner
            style={{
              backgroundImage: `url(${imagen})`
            }}
          />
        </Col2>
      </Article>
    </SlideUI>
  );
};

export default Slide;
