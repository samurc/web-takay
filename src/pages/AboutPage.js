/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchData } from '../actions';
import Acerca from '../components/Acerca';
import Iniciativa from '../components/Iniciativa';
import Bloques from '../components/Bloques';
import FormularioContactanos from '../components/FormularioContactanos';

const AboutPage = props => {
  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>TAKAY | ABOUT</title>
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
    <div>
      {head()}
      <div className="block">
        <Acerca />
      </div>
      <div className="block">
        <Bloques />
      </div>
      <div className="block">
        <FormularioContactanos />
      </div>
      <div className="block">
        <Iniciativa />
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

AboutPage.propTypes = {
  next: PropTypes.arrayOf(PropTypes.any),
  fetchData: PropTypes.func
};

AboutPage.defaultProps = {
  next: [],
  fetchData: null
};

export default {
  component: connect(mapStateToProps, { fetchData })(AboutPage),
  loadData
};
