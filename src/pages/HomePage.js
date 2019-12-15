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
import Iniciativa from '../components/Iniciativa';
import ArticleDetailModal from '../components/ArticleDetailModal';

const HomePage = props => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
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
    // loadData();
  }, [loadData]);

  const clickModal = () => {
    setModal(true);
  };

  return (
    <div id="wrap">
      {head()}
      {modal ? <ArticleDetailModal handler={closeModal} /> : null}

      <div className="block">
        <Fullbleed clickModal={clickModal} />
      </div>
      <div className="block">
        <Info />
      </div>
      <div className="block">
        <Interes />
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
