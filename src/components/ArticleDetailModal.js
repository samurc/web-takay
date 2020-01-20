import React from 'react';
import PropTypes from 'prop-types';

const youtubeGetId = url => {
  var _id = '', _url = url.replace(/(>|<)/gi, '');
  url = _url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    _id = url[2].split(/[^0-9a-z_\-]/i);
    _id = _id[0];
  } else {
    _id = url;
  }
  return _id;
}

const ArticleDetailModal = props => {
  const { handler, link } = props;
  const link5 = link[4] || {};
  const ytId = youtubeGetId(link5.link);
  return (
    <>
      <div className="x-modal-video">
        <a onClick={handler} className="x-close close">
          X
        </a>
        <div className="x-wrapper">
          <div className="header-video"></div>
          <div className="x-container">
            <div className="x-item">
              <div className="cover media-player">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-modal-video x-close" onClick={handler}></div>
      </div>
    </>
  );
};

ArticleDetailModal.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  handler: PropTypes.func
};

ArticleDetailModal.defaultProps = {
  data: null,
  handler: null
};

export default ArticleDetailModal;
