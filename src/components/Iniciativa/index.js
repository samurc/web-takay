import React from 'react';
import { Fullbleed } from './styles';
import imgRespaldo from '../../assets/img/respaldo.png';
import imgPacasmayo from '../../assets/img/pacasmayo.png';

const Iniciativa = ({imagenes}) => {
  const img3 = imagenes ? imagenes['3'] : {};  
  return (
    <Fullbleed
      style={{
        backgroundImage: `url(${img3.imagen})`
      }}
    >
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <div className="info-article">
            <h2>Una iniciativa respaldada por:</h2>
            <img src={imgPacasmayo} width={185} height={40} />
          </div>
        </div>
      </div>
    </Fullbleed>
  );
};

export default Iniciativa;
