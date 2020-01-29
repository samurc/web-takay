/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Libro from '../components/Libro';

const LibroPage = props => {
  const head = () => {
    const { libroDeReclamaciones } = props
    if (libroDeReclamaciones) {
      return (
        <Helmet key={Math.random()}
            meta={
            [
              {
                "property": "description",
                "content": `${libroDeReclamaciones.meta_descrip}`
              },
              {
                "property": "og:title",
                "content": `${libroDeReclamaciones.meta_titulo}`
              }, {
                "property": "og:description",
                "content": `${libroDeReclamaciones.meta_descrip}`
              }
            ]
          }
        >
            <title>{ libroDeReclamaciones.meta_titulo }</title>
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
      <div className="block">
        <Libro
          rutaFormReclamaciones={props.rutaFormReclamaciones}
          textosReclamaciones={props.textosReclamaciones}
          pdf={props.pdf}
          comboLibro={props.comboLibro}
          comboMoneda={props.comboMoneda}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    libroDeReclamaciones: state.metadata.libroDeReclamaciones,
    rutaFormReclamaciones: state.metadata.rutaFormReclamaciones,
    textosReclamaciones: state.metadata.textosReclamaciones,
    pdf: state.metadata.pdf,
    comboLibro: state.metadata.comboLibro,
    comboMoneda: state.metadata.comboMoneda
  };
};

export default connect(mapStateToProps, null)(LibroPage)
