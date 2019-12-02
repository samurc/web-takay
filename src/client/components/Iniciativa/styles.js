import styled, { css } from 'styled-components';

export const Fullbleed = styled.div`
  margin-bottom: 4rem;
  height: calc(40vh - 60px);
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
  .info-article {
    position: absolute;
    left: 20px;
    width: calc(100% - 40px);
    top: 40px;
    text-align: center;
    h2 {
      color: #fff;
      font-size: 2.6rem;
      text-align: left;
      text-transform: uppercase;
    }
    p {
      margin-top: 6rem;
      color: #fff;
      font-size: 3.2rem;
      font-weight: bold;
    }
  }
`;
