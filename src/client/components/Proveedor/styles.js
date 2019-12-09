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
    h2 {
      color: #f7ce48;
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
