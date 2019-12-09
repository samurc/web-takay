import React, { Component } from 'react';
import Slide from './slide';
import { SliderUI, SliderWrapper } from './styles';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          text:
            '1 Asesoramos y acompañamos a las familias durante todo el proceso, desde el diseño hasta la ejecución',
          image:
            'https://img.freepik.com/foto-gratis/trabajador-industrial-albanil-instalando-mamposteria-ladrillo-espatula-sitio-construccion_33835-1136.jpg',
          button_text: 'Inicia ahora',
          button_url: 'https://www.google.com/'
        },
        {
          text:
            '2 Asesoramos y acompañamos a las familias durante todo el proceso, desde el diseño hasta la ejecución',
          image:
            'https://img.freepik.com/foto-gratis/trabajador-industrial-albanil-instalando-mamposteria-ladrillo-espatula-sitio-construccion_33835-1136.jpg',
          button_text: 'Inicia ahora',
          button_url: 'https://www.google.com/'
        },
        {
          text:
            '3 Asesoramos y acompañamos a las familias durante todo el proceso, desde el diseño hasta la ejecución',
          image:
            'https://img.freepik.com/foto-gratis/trabajador-industrial-albanil-instalando-mamposteria-ladrillo-espatula-sitio-construccion_33835-1136.jpg',
          button_text: 'Inicia ahora',
          button_url: 'https://www.google.com/'
        }
      ],
      currentIndex: 0,
      translateValue: 0
    };
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goSlide = this.goSlide.bind(this);
  }

  goToPrevSlide() {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  }

  slideWidth() {
    return document.querySelector('.slide').clientWidth;
  }

  goToNextSlide() {
    if (this.state.currentIndex === this.state.list.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  }

  goSlide(index) {
    this.setState({
      currentIndex: index,
      translateValue: -(this.slideWidth() * index)
    });
  }

  render() {
    const { list, translateValue } = this.state;
    return (
      <SliderUI>
        <SliderWrapper
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}
        >
          {list.map((data, i) => (
            <Slide
              key={i}
              data={data}
              arrayCount={list.length}
              order={i}
              handleGoSlide={this.goSlide}
              theme={this.props.theme}
            />
          ))}
        </SliderWrapper>
      </SliderUI>
    );
  }
}
