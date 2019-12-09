/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchData } from '../actions';
import Slider from '../components/Slider';
import FormularioExperiencia from '../components/FormularioExperiencia';
import Beneficios from '../components/Beneficios';
import Carousel from '../components/Carousel';
import Proveedor from '../components/Proveedor';
import Socio from '../components/Socio';

const ExpertPage = props => {
  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>TAKAY | EXPERT</title>
        <meta property="og:title" content="TAKAY" />
        <meta
          name="description"
          content="Breaking news,latest data, popular data from most popular news websites of the world"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://react-ssr-ilker.herokuapp.com" />
      </Helmet>
    );
  };

  const { fetchData: loadData } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadData();
  }, [loadData]);

  return (
    <div id="wrap">
      {head()}
      <div className="block">
        <div className="grid">
          <Slider theme="yellow" />
        </div>
      </div>
      <div className="block">
        <div className="grid">
          <Beneficios />
        </div>
      </div>
      <div className="block">
        <div className="grid">
          <Proveedor />
        </div>
      </div>
      <div className="block">
        <div className="grid">
          <FormularioExperiencia />
        </div>
      </div>
      <div className="block">
        <div className="grid">
          <Socio />
        </div>
      </div>
      <div>
        <div className="grid">
          <Carousel theme="yellow" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    next: state.metadata.next
  };
};

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(fetchData()); // Manually dispatch a network request
};

ExpertPage.propTypes = {
  next: PropTypes.arrayOf(PropTypes.any),
  fetchData: PropTypes.func
};

ExpertPage.defaultProps = {
  next: [],
  fetchData: null
};

export default {
  component: connect(mapStateToProps, { fetchData })(ExpertPage),
  loadData
};
