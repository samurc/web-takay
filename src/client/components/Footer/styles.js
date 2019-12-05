import styled, { css } from 'styled-components';

export const LayoutRow = styled.div`
  margin: 4rem 20rem 2rem 20rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin: 5rem 0;
  }
`;
export const Item = styled.div`
  flex: 1;
  h3 {
    font-size: 15px;
    color: #f15a22;
    margin-left: 10px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
  &.about {
    max-width: 210px;
    margin-right: 10px;
    img {
      margin-bottom: 4.5rem;
    }
    > p {
      word-break: break-all;
    }
  }
  &.contact {
    max-width: 200px;
    margin-right: 10px;
  }
  &.location {
    max-width: 200px;
  }
  @media only screen and (max-width: 992px) {
    &.about {
      order: 1;
      font-size: 0.8rem;
      max-width: 230px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5rem;
      img {
        margin-bottom: 0.5rem;
      }
    }
    &.contact {
      order: 3;
      max-width: 185px;
      margin-left: auto;
      margin-right: auto;
      > p,
      h3 {
        text-align: center;
      }
    }
    &.location {
      order: 2;
      max-width: 185px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 4.5rem;
      > p,
      h3 {
        text-align: center;
      }
    }
  }
`;
export const FooterCopyright = styled.div`
  border-top: 1px solid #55b8be;
  padding: 15px 0;
  text-align: right;
  @media only screen and (max-width: 992px) {
    width: 80%;
    margin: 0 auto;
    font-size: 6px;
  }
`;
