import React from 'react';
import {
  SlideUI,
  Article,
  Col1,
  Col1Inner,
  Col2,
  Col2Inner,
  Arrows,
  Arrow,
  Counter
} from './styles-slide';

const Slide = ({ data, arrayCount, order, goToPrevSlide, goToNextSlide, theme }) => {
  const { descripcion, imagen, titulo } = data;

  return (
    <SlideUI className="carousel">
      <Article>
        <Col1>
          <Col1Inner theme={theme}>
            <p>{descripcion}</p>
            <span>{titulo}</span>
            <Arrows theme={theme}>
              <Arrow onClick={goToPrevSlide}> {'<'} </Arrow>
              <Counter>
                {order + 1}/{arrayCount}
              </Counter>
              <Arrow onClick={goToNextSlide}> {'>'} </Arrow>
            </Arrows>
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
