/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Acerca from '../components/Acerca';
import Iniciativa from '../components/Iniciativa';
import Bloques from '../components/Bloques';
import FormularioContactanos from '../components/FormularioContactanos';

const AboutPage = props => {
  const head = () => {
    const { nosotros } = props
    return (
      <Helmet key={Math.random()}
        meta={
          [
            {
              "property": "description",
              "content": `${nosotros.meta_descrip}`
            },
            {
              "property": "og:title",
              "content": `${nosotros.meta_titulo}`
            }, {
              "property": "og:description",
              "content": `${nosotros.meta_descrip}`
            }
          ]
        }
      >
        <title>{nosotros.titulo}</title>
      </Helmet>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    nosotros: state.metadata.nosotros
  };
};

export default connect(mapStateToProps, null)(AboutPage)
