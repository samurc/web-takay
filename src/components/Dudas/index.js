import React from 'react';
import { Fullbleed, Button } from './styles';

const Dudas = ({pdf}) => {
  const pdf2 = pdf[1] || {};
  return (
    <Fullbleed>
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <div className="info-article">
            <h2>Si tienes más dudas de cómo funciona puedes revisar aquí</h2>
            <Button>
              <a href={pdf2.imagen} target="_blank">{pdf2.titulo}</a>
            </Button>
          </div>
        </div>
      </div>
    </Fullbleed>
  );
};

export default Dudas;
