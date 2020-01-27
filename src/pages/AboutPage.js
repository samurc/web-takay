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
import Flotante from '../components/Flotante';

const AboutPage = props => {
  const head = () => {
    const { nosotros } = props
    if ( nosotros ){
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
          <title>{nosotros.meta_titulo}</title>
        </Helmet>
      );
    }
    
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {head()}
      <Flotante pagina="nosotros"/>
      <div className="block">
        <Acerca imagenes={props.imagenes}/>
      </div>
      <div className="block">
        <Bloques textos={props.textosNosotros}/>
      </div>
      <div id="verformulario" className="block">
        <FormularioContactanos rutaFormNosotros={props.rutaFormNosotros} pdf={props.pdf} comboServicio={props.comboServicio}/>
      </div>
      <div className="block">
        <Iniciativa imagenes={props.imagenes}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    nosotros: state.metadata.nosotros,
    textosNosotros: state.metadata.textosNosotros,
    rutaFormNosotros: state.metadata.rutaFormNosotros,
    comboServicio: state.metadata.comboServicio,
    pdf: state.metadata.pdf,
    imagenes: state.metadata.imagenes
  };
};

export default connect(mapStateToProps, null)(AboutPage)
