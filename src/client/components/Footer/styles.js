import styled, { css } from 'styled-components';

export const LayoutRow = styled.div`
  margin: 4rem 20rem 2rem 20rem;
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.div`
  flex: 1;
  &.about {
    max-width: 210px;
    margin-right: 10px;
    img {
      margin-bottom: 4.5rem;
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
