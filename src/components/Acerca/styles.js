import styled, { css } from 'styled-components';

export const AcercaUI = styled.div`
  height: calc(63vh - 50px);
  background: #eee;
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
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
    height: 425px;
    .grid-fullbleed {
      padding: 0px;
    }
    .logoTakay {
      width: 195px;
      height: 40px;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

export const H3 = styled.h3`
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 23px;
  text-align: center;
  @media only screen and (max-width: 992px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export const H1 = styled.h1`
  font-size: 32.85px;
  color: #ffffff;
  text-align: center;
`;
