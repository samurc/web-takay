import React from 'react';
import { ButtonOpen, TextoVertical } from './styles';

const Flotante = ({pagina}) => {
  let toPageAnchor
  if (pagina==='nosotros') {
    toPageAnchor = "/nosotros#verformulario"
  } else if (pagina==='familia') {
    toPageAnchor = "/familia#verformulario"
  } else if (pagina==='experto') {
    toPageAnchor = "/experto#verformulario"
  }
  return (
    <ButtonOpen to={toPageAnchor} pagina={pagina}>
      <TextoVertical>Contáctanos</TextoVertical>
    </ButtonOpen>
  );
};

export default Flotante;
