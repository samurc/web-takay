/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Libro from '../components/Libro';

const LibroPage = props => {
  const head = () => {
    return (
    <Helmet key={Math.random()}
        meta={
        [
            {
            "property": "description",
            "content": `Libro de reclamaciones`
            },
            {
            "property": "og:title",
            "content": `Libro de reclamaciones`
            }, {
            "property": "og:description",
            "content": `Libro de reclamaciones`
            }
        ]
        }
    >
        <title>Libro de reclamaciones</title>
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
        <Libro/>
      </div>
    </div>
  );
};

export default connect(null, null)(LibroPage)
