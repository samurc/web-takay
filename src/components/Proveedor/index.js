import React from 'react';
import { Fullbleed } from './styles';

import checkbox from '../../assets/svg/checkbox2.svg';

const Proveedor = () => {
  return (
    <Fullbleed>
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <div className="info-article">
            <h2>¿Sabes como hacerte proveedor de takay?</h2>
            <div className="item-row">
              <img src={checkbox} width={17} height={14} />
              Inscríbete online en TAKAY
            </div>
            <div className="item-row">
              <img src={checkbox} width={17} height={14} />
              Completa tu el CV que te será enviado por nuestros asesores
            </div>
            <div className="item-row">
              <img src={checkbox} width={17} height={14} />
              Presenta un certificado de antecedentes judiciales y penales
            </div>
            <div className="item-row">
              <img src={checkbox} width={17} height={14} />
              Presenta tu certificado de competencias laborales o pasa nuestra prueba técnica
            </div>
            <div className="item-row">
              <img src={checkbox} width={17} height={14} />
              Pasa una prueba de confianza en nuestro centro de atención
            </div>
            <div className="item-row">
              <img src={checkbox} width={17} height={14} />
              Tómate una fotografía actual para incluir en tu perfil
            </div>
            <div className="item-row">
              <img src={checkbox} width={17} height={14} />
              Compártenos fotografías de obras que hayas realizado antes para añadirlas a tu perfil
            </div>
          </div>
        </div>
      </div>
    </Fullbleed>
  );
};

export default Proveedor;
