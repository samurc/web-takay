import styled from 'styled-components';

export const Fullbleed = styled.div`
  margin-bottom: 4rem;
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
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    h2 {
      font-weight: 900;
      color: #f7ce48;
      font-size: 6rem;
      line-height: 65px;
      text-align: center;
      text-transform: uppercase;
      margin: 0px auto 4rem auto;
    }
    .item-row {
      font-family: 'Source Serif Pro', serif;
      margin-left: 6rem;
      margin-bottom: 18px;
      font-size: 15px;
      display: flex;
      align-items: center;
      color: #ffffff;
      img {
        margin-right: 10px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .grid-fullbleed {
      padding: 40px 20px;
    }
  }
`;
