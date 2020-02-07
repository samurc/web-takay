import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import ReactGA from 'react-ga'
import * as actions from './actions'
import { GlobalStyle } from './styles/GlobalStyles';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Route, withRouter, Redirect } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExpertPage from './pages/ExpertPage';
import FamilyPage from './pages/FamilyPage';
import LibroPage from './pages/LibroPage';
import NotFoundPage from './pages/NotFoundPage';

const loadingCircle = "<div class='circular indeterminate multicolor'><svg class='circle' viewBox='0 0 60 60'><circle class='path' cx='30' cy='30' r='25'></circle></svg></div>";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingData: false
    };
  }

  async componentWillMount() {
    await this.props.actions.fetchData();
    this.setState({ loadingData: true });
    ReactGA.initialize('UA-157950236-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.unlisten = this.props.history.listen((location, action) => {
      ReactGA.pageview(location.pathname + location.search);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { pathname: locationName } = this.props.location;
    const { loadingData } = this.state;
    const { link, textosPie } = this.props;
    return (
      <Fragment>
        {loadingData && (
          <div>
            <GlobalStyle />
            <Header locationName={locationName} />
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/familia" component={FamilyPage} />
              <Route exact path="/experto" component={ExpertPage} />
              <Route exact path="/nosotros" component={AboutPage} />
              <Route exact path="/libro-de-reclamaciones" component={LibroPage} />
            </div>
            <Footer locationName={locationName} link={link} textosPie={textosPie} />
          </div>
        )}
        {!loadingData && (
          <div
            dangerouslySetInnerHTML={{
              __html: loadingCircle
            }}
          />
        )}
      </Fragment>
    );
  }
};

function mapStateToProps(state) {
  return {
    location: state.router.location,
    link: state.metadata.link,
    textosPie: state.metadata.textosPie
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


