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

const Slide = ({ data, arrayCount, order, goToPrevSlide, goToNextSlide }) => {
  const { text, image, name } = data;

  return (
    <SlideUI className="carousel">
      <Article>
        <Col1>
          <Col1Inner>
            <p>{text}</p>
            <span>{name}</span>
            <Arrows>
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
              backgroundImage: `url(${image})`
            }}
          />
        </Col2>
      </Article>
    </SlideUI>
  );
};

export default Slide;
