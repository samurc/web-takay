import React from 'react';
import { FullbleedVideo, PlayVideo, Text } from './styles';

import VideoPNG from '../../assets/img/VIDEO-HOME.png';

const Fullbleed = ({ clickModal }) => {
  return (
    <FullbleedVideo
      onClick={clickModal}
      style={{
        backgroundImage: `url(${VideoPNG})`
      }}
    >
      <div id="full-media">
        <div className="grid-fullbleed grid">
          <PlayVideo href="#" className="play-video">
            <i className="material-icons">play_arrow</i>
          </PlayVideo>
          <Text>Conoce de Takay aquí</Text>
        </div>
    </div>
    </FullbleedVideo>
  );
};

export default Fullbleed;
