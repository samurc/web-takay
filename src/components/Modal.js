import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({handler}) => {

  return (
    <>
      <div className="x-modal-video">  
        <div className="x-popup-wrapper">
          <a onClick={handler} className="x-popup-close close">
            X
          </a>
          <div className="x-popup">
            Hemos recibido tu información correctamente. A la brevedad nos contactaremos contigo.
          </div>
        </div>
        <div className="bg-modal-video x-close" onClick={handler}></div>
      </div>
    </>
  );
};

Modal.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  handler: PropTypes.func
};

Modal.defaultProps = {
  data: null,
  handler: null
};

export default Modal;
