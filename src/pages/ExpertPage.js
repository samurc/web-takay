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

const ExpertPage = props => {
  const head = () => {
    const { experto } = props
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
        <title>{experto.titulo}</title>
      </Helmet>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrap">
      {head()}
      <div className="block">
        <div className="grid">
          <SliderExperto theme="yellow" />
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull">
          <Beneficios />
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
          <CarouselExpertos theme="yellow" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    experto: state.metadata.experto
  };
};


export default connect(mapStateToProps, null)(ExpertPage)
