import styled, { css } from 'styled-components';

export const LayoutRow = styled.div`
  margin: 4rem 20rem 2rem 20rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin: 4rem 0;
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
`;
export const FooterCopyright = styled.div`
  border-top: 1px solid #55b8be;
  padding: 15px 0;
  text-align: right;
`;
