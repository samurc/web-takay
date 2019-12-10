import React from 'react';
import { AcercaUI, Content, H3, H1 } from './styles';

import Logotakay from '../../assets/img/logo_takay.png';

const Acerca = () => {
  return (
    <AcercaUI
      style={{
        backgroundImage: `url(https://p-gruporpp-media.s3.amazonaws.com/2019/12/09/874107portadapng.png)`
      }}
    >
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <Content>
            <H3>Acerca de</H3>
            <img src={Logotakay} alt="logo" width={440} height={90} />
          </Content>
        </div>
      </div>
    </AcercaUI>
  );
};

export default Acerca;
