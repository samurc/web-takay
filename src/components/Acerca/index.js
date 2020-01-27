import React from 'react';
import { AcercaUI, Content, H3, H1 } from './styles';

import Logotakay from '../../assets/img/logo_takay.png';

const Acerca = ({imagenes}) => {
  const img4 = imagenes ? imagenes['4'] : {};
  return (
    <AcercaUI
      style={{
        backgroundImage: `url(${img4.imagen})`
      }}
    >
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <Content>
            <H3>Acerca de</H3>
            <img src={Logotakay} className="logoTakay" alt="logo" width={440} height={90} />
          </Content>
        </div>
      </div>
    </AcercaUI>
  );
};

export default Acerca;
