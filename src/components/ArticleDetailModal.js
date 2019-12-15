import React from 'react';
import PropTypes from 'prop-types';

const ArticleDetailModal = props => {
  const { handler, data } = props;
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
                  src="https://www.youtube.com/embed/rngtdlTOWsU?autoplay=1"
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
