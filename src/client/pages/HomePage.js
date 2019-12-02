/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchData } from '../actions';
import Fullbleed from '../components/Fullbleed';
import Info from '../components/Info';
import Interes from '../components/Interes';

const HomePage = props => {
  const renderArticles = () => {
    return props.next.map(article => (
      <div className="col s12 m6 l6 xl4" key={article.name}>
        <div className="card large">
          <div className="card-image">
            <LazyLoadImage alt={article.name} src={article.imageUrl} />
          </div>
          <div className="card-content">
            <span className="card-title">{article.description}</span>
          </div>
        </div>
      </div>
    ));
  };

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>TAKAY | INICIO</title>
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
        <Fullbleed />
      </div>
      <div className="block">
        <Info />
      </div>
      <div className="block">
        <Interes />
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

HomePage.propTypes = {
  next: PropTypes.arrayOf(PropTypes.any),
  fetchData: PropTypes.func
};

HomePage.defaultProps = {
  next: [],
  fetchData: null
};

export default {
  component: connect(mapStateToProps, { fetchData })(HomePage),
  loadData
};
