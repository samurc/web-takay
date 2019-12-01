import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ route }) => {
  console.log(route);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div className="container">
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
