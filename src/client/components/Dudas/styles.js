import styled from 'styled-components';

export const Fullbleed = styled.div`
  margin-bottom: 4rem;
  height: 26rem;
  background: #6d6e71;
  position: relative;
  #full-media {
    height: 100%;
  }
  .grid-fullbleed {
    height: 100%;
    position: relative;
    padding: 40px 200px;
  }
  .info-article {
    h2 {
      color: #fff;
      font-size: 3.75rem;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 4rem;
    }
  }
  @media only screen and (max-width: 992px) {
    .grid-fullbleed {
      padding: 40px 20px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  > a {
    text-align: center;
    display: inline-block;
    background: #00949e;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 0.3rem 1.5rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
