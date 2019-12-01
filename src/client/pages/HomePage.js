/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchData } from '../actions';
import ArticleDetailModal from '../components/ArticleDetailModal';

const HomePage = props => {
  const [modal, setModal] = useState(false);
  const [currentData, setCurrentData] = useState({});

  const readArticle = data => {
    setCurrentData(data);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

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
        <title>TAKAY</title>
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
      <div className="row">
        <div className="section">
          <h3>Popular Articles</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderArticles()}</div>
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
