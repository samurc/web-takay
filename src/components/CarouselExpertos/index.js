import React, { Component } from 'react';
import Slide from './slide';
import { Title, SliderUI, SliderWrapper } from './styles';
import Senora from '../../assets/img/experiencias21.png';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          text: '“Desde que soy un experto TAKAY, estoy buscadito y mis ingresos han mejorado”',
          image: Senora,
          name: 'Carlos Perleche'
        },
        {
          text: '“Desde que soy un experto TAKAY, estoy buscadito y mis ingresos han mejorado”',
          image: Senora,
          name: 'Carlos Perleche'
        },
        {
          text: '“Desde que soy un experto TAKAY, estoy buscadito y mis ingresos han mejorado”',
          image: Senora,
          name: 'Carlos Perleche'
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
    return document.querySelector('.carousel').clientWidth;
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
      <div>
        <Title theme={this.props.theme}>EXPERIENCIAS</Title>
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
                goToPrevSlide={this.goToPrevSlide}
                goToNextSlide={this.goToNextSlide}
                theme={this.props.theme}
              />
            ))}
          </SliderWrapper>
        </SliderUI>
      </div>
    );
  }
}
