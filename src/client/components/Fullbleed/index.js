import React from 'react';
import { FullbleedVideo, PlayVideo } from './styles';

const Fullbleed = () => {
  return (
    <FullbleedVideo
      style={{
        backgroundImage: `url(https://img.freepik.com/foto-gratis/trabajador-industrial-albanil-instalando-mamposteria-ladrillo-espatula-sitio-construccion_33835-1136.jpg)`
      }}
    >
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <PlayVideo href="#" className="play-video">
            <i className="material-icons">play_arrow</i>
          </PlayVideo>
        </div>
      </div>
    </FullbleedVideo>
  );
};

export default Fullbleed;
