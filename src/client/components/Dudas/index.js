import React from 'react';
import { Fullbleed, Button } from './styles';

const Dudas = () => {
  return (
    <Fullbleed>
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <div className="info-article">
            <h2>Si tienes más dudas de cómo funciona puedes revisar aquí</h2>
            <Button>
              <a href={'#'}>Preguntas frecuentes</a>
            </Button>
          </div>
        </div>
      </div>
    </Fullbleed>
  );
};

export default Dudas;
