import React from 'react';
import { Fullbleed } from './styles';

const Iniciativa = () => {
  return (
    <Fullbleed
      style={{
        backgroundImage: `url(http://www.bossar.com/app/uploads/2016/02/c-milestones.jpg)`
      }}
    >
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <div class="info-article">
            <h2>Una iniciativa respaldada por:</h2>
            <p>Pacasmayo</p>
          </div>
        </div>
      </div>
    </Fullbleed>
  );
};

export default Iniciativa;
