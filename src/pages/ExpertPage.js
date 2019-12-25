/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import SliderExperto from '../components/SliderExperto';
import FormularioExperiencia from '../components/FormularioExperiencia';
import Beneficios from '../components/Beneficios';
import CarouselExpertos from '../components/CarouselExpertos';
import Proveedor from '../components/Proveedor';
import Socio from '../components/Socio';
import Flotante from '../components/Flotante';

const ExpertPage = props => {
  const head = () => {
    const { experto } = props
    if (experto) {
      return (
        <Helmet key={Math.random()}
          meta={
            [
              {
                "property": "description",
                "content": `${experto.meta_descrip}`
              },
              {
                "property": "og:title",
                "content": `${experto.meta_titulo}`
              }, {
                "property": "og:description",
                "content": `${experto.meta_descrip}`
              }
            ]
          }
        >
          <title>{experto.meta_titulo}</title>
        </Helmet>
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrap">
      {head()}

      <Flotante pagina="experto"/>

      <div className="block">
        <div className="grid">
          <SliderExperto theme="yellow" lista={props.sliderExperto}/>
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull">
          <Beneficios textos={props.textosExperto}/>
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull">
          <Proveedor />
        </div>
      </div>
      <div id="verformulario" className="block">
        <div className="grid">
          <FormularioExperiencia />
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull">
          <Socio />
        </div>
      </div>
      <div>
        <div className="grid">
          <CarouselExpertos theme="yellow" lista={props.experienciaExperto}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    experto: state.metadata.experto,
    experienciaExperto: state.metadata.experienciaExperto,
    sliderExperto: state.metadata.sliderExperto,
    textosExperto: state.metadata.textosExperto
  };
};


export default connect(mapStateToProps, null)(ExpertPage)
