import React from 'react';
import { FullbleedVideo, PlayVideo } from './styles';

import VideoPNG from '../../assets/img/VIDEO-HOME.png';

const Fullbleed = () => {
  return (
    <FullbleedVideo
      style={{
        backgroundImage: `url(${VideoPNG})`
      }}
    >
      {/*<div id="full-media">
        <div className="grid-fullbleed grid">
          <PlayVideo href="#" className="play-video">
            <i className="material-icons">play_arrow</i>
          </PlayVideo>
        </div>
    </div>*/}
    </FullbleedVideo>
  );
};

export default Fullbleed;
