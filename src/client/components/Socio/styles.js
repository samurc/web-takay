import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  background: #f7ce48;
  flex-basis: 77rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    flex: none;
    background: #ffffff;
  }
`;

export const Col1Inner = styled.div`
  padding: 18rem 0;
  max-width: 57rem;
  line-height: 1.15;
  white-space: normal;
  > h1 {
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 42px;
    color: #ffffff;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 992px) {
    padding: 2.5rem 2rem;
    > h1 {
      font-size: 25px;
      line-height: 28px;
      color: #f7ce48;
      max-width: 275px;
    }
  }
`;

export const Col2 = styled.div`
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 992px) {
    height: 290px;
  }
`;

export const Col2Inner = styled.div`
  background-size: cover;
  background-position: center top;
  flex: none;
  width: 100%;
  height: 100%;
`;
