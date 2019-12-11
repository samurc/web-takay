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
    height: auto;
    .grid-fullbleed {
      padding: 40px 20px;
    }
    .info-article {
      h2 {
        font-size: 25px;
        line-height: 30px;
      }
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  > a {
    font-weight: 900;
    text-align: center;
    display: inline-block;
    background: #00949e;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 18.79px;
    padding: 0.5rem 1.6rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
