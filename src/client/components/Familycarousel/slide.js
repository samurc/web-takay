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

const Slide = ({ data, arrayCount, order, handleGoSlide }) => {
  const { text, image, button_text, button_url } = data;

  const arrDots = [];
  for (let i = 0; i < arrayCount; i++) {
    arrDots.push(
      <Dot key={i} onClick={() => handleGoSlide(i)} className={i === order ? 'active' : ''}>
        {i + 1}
      </Dot>
    );
  }

  return (
    <SlideUI className="slide">
      <Article>
        <Col1>
          <Col1Inner>
            <h1>{text}</h1>
            <Button>
              <a href={button_url}>{button_text}</a>
            </Button>
            <Dots>{arrDots}</Dots>
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
