import React, { Component } from 'react';
import Flickity from '../Flickity';
import Slide from './slide';
import { SliderUI, SliderWrapper } from './styles';

import SliderImg from '../../assets/img/14.png';
import SliderImg1 from '../../assets/img/slider1.png';
import SliderImg2 from '../../assets/img/slider2.png';

export default class SliderExperto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          text: 'TU EXPERIENCIA Y TRABAJO SERÁN MEJOR VALORES',
          image: SliderImg,
          button_text: 'Inicia ahora',
          button_url: '#verformulario'
        },
        {
          text: 'Mantenemos un contacto constante entre el experto y la familia',
          image: SliderImg2,
          button_text: 'Inicia ahora',
          button_url: '#verformulario'
        },
        {
          text:
            'Asesoramos y acompañamos a las familias durante todo el proceso, desde el diseño hasta la ejecución',
          image: SliderImg1,
          button_text: 'Inicia ahora',
          button_url: '#verformulario'
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
      // translateValue: -(this.slideWidth() * index)
    });
  }

  render() {
    const { list, translateValue } = this.state;
    return (
      <div>
        <Flickity
          className='flickity-slider'
          currentIndex={this.state.currentIndex}
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            pageDots: false,
            prevNextButtons: false,
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
        </Flickity>
      </div>
    );
  }
}
