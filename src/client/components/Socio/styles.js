import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
`;

export const Col1 = styled.div`
  background: #f7ce48;
  flex-basis: 77rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
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
    padding: 0;
  }
`;

export const Col2 = styled.div`
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
`;

export const Col2Inner = styled.div`
  background-size: cover;
  background-position: center;
  flex: none;
  width: 100%;
  height: 100%;
`;
