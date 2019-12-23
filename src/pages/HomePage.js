/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import Fullbleed from '../components/Fullbleed';
import Info from '../components/Info';
import Interes from '../components/Interes';
import Iniciativa from '../components/Iniciativa';
import ArticleDetailModal from '../components/ArticleDetailModal';
import Flotante from '../components/Flotante';

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.clickModal = this.clickModal.bind(this)
  }

  closeModal () {
    this.setState({ modal: false })
  };

  head () {
    const { inicio } = this.props
    if ( inicio ){
      return (
        <Helmet key={Math.random()}
          meta={
            [
              {
                "property": "description",
                "content": `${inicio.meta_descrip}`
              },
              {
                "property": "og:title",
                "content": `${inicio.meta_titulo}`
              }, {
                "property": "og:description",
                "content": `${inicio.meta_descrip}`
              }
            ]
          }
        >
          <title>{inicio.meta_titulo}</title>
        </Helmet>
      );
    }
    
  };

  clickModal() {
    this.setState({ modal: true })
  }

  render() {
    return (
      <div id="wrap">
        {this.head()}
        {this.state.modal ? <ArticleDetailModal handler={this.closeModal} /> : null}
        <Flotante/>
        
        <div className="block">
          <Fullbleed clickModal={this.clickModal} />
        </div>
        <div className="block">
          <Info />
        </div>
        <div className="block">
          <Interes textos={this.props.textosHome}/>
        </div>
        <div className="block">
          <Iniciativa />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inicio: state.metadata.inicio,
    textosHome: state.metadata.textosHome
  }
}


export default connect(mapStateToProps, null)(HomePage)
