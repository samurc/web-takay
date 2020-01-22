/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import Slider from '../components/Slider';
import Steps from '../components/Steps';
import Formulario from '../components/Formulario';
import Expertos from '../components/Expertos';
import Carousel from '../components/Carousel';
import Dudas from '../components/Dudas';
import Flotante from '../components/Flotante';

const FamilyPage = props => {
  const head = () => {
    const { familia } = props
    if (familia){
      return (
        <Helmet key={Math.random()}
          meta={
            [
              {
                "property": "description",
                "content": `${familia.meta_descrip}`
              },
              {
                "property": "og:title",
                "content": `${familia.meta_titulo}`
              }, {
                "property": "og:description",
                "content": `${familia.meta_descrip}`
              }
            ]
          }
        >
          <title>{familia.meta_titulo}</title>
        </Helmet>
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrap">
      {head()}

      <Flotante pagina="familia"/>

      <div className="block">
        <div className="grid">
          <Slider lista={props.sliderFamilia}/>
        </div>
      </div>
      <div className="block">
        <div className="grid gridfull">
          <Steps textos={props.textosFamilia}/>
        </div>
      </div>
      <div id="verformulario" className="block">
        <div className="grid">
          <Formulario rutaFormFamilia={props.rutaFormFamilia} comboProyecto={props.comboProyecto} comboSituacion={props.comboSituacion} pdf={props.pdf}/>
        </div>
      </div>
      {/*<div className="block">
        <div className="grid gridfull fondocolorceleste">
          <Expertos lista={props.listaExperto}/>
        </div>
      </div>*/}
      {/*<div className="block">
        <div className="grid">
          <Carousel lista={props.experienciaFamilia}/>
        </div>
      </div>*/}
      <div className="block">
        <div className="grid gridfull">
          <Dudas pdf={props.pdf} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    familia: state.metadata.familia,
    experienciaFamilia: state.metadata.experienciaFamilia,
    sliderFamilia: state.metadata.sliderFamilia,
    listaExperto: state.metadata.listaExperto,
    textosFamilia: state.metadata.textosFamilia,
    comboProyecto: state.metadata.comboProyecto,
    comboSituacion: state.metadata.comboSituacion,
    rutaFormFamilia: state.metadata.rutaFormFamilia,
    pdf: state.metadata.pdf
  };
};


export default connect(mapStateToProps, null)(FamilyPage)
