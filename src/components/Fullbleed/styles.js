import styled, { css } from 'styled-components';

export const Text = styled.p`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 1.9rem;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    font-size: 1.2rem;
    bottom: 20%;
  }
`

export const FullbleedVideo = styled.div`
  height: calc(63vh - 50px);
  background: #eee;
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    cursor: pointer;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.52);
    z-index: 2;
  }
  #full-media {
    height: 100%;
  }
  .grid-fullbleed {
    height: 100%;
    position: relative;
    padding: 20px;
    z-index: 3;
  }
  @media only screen and (max-width: 992px) {
    height: calc(44vh - 50px);
  }
  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 992px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
    height: calc(92vh - 50px);
  }
`;

export const PlayVideo = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  height: 82px;
  width: 82px;
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  i {
    color: rgba(0, 0, 0, 0.5);
    font-size: 4.8rem;
  }
`;
