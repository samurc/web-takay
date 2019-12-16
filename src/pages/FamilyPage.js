/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import Slider from '../components/Slider';
import Steps from '../components/Steps';
import Formulario from '../components/Formulario';
import Expertos from '../components/Expertos';
import Carousel from '../components/Carousel';
import Dudas from '../components/Dudas';

const FamilyPage = props => {
  const head = () => {
    const { familia } = props
    return (
      <Helmet key={Math.random()}
        meta={
          [
            {
              "property": "description",
              "content": `${familia.meta_descrip}`
            },
            {
              "property": "og:title",
              "content": `${familia.meta_titulo}`
            }, {
              "property": "og:description",
              "content": `${familia.meta_descrip}`
            }
          ]
        }
      >
        <title>{familia.titulo}</title>
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
          <Slider />
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull">
          <Steps />
        </div>
      </div>
      <div id="verformulario" className="block">
        <div className="grid">
          <Formulario />
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull fondocolorceleste">
          <Expertos />
        </div>
      </div>
      <div className="block">
        <div className="grid">
          <Carousel />
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull">
          <Dudas />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    familia: state.metadata.familia
  };
};


export default connect(mapStateToProps, null)(FamilyPage)
