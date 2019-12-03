import styled, { css } from 'styled-components';

export const LayoutRow = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.div`
  flex: 1;
  &.about {
    max-width: 250px;
  }
  &.contact {
    max-width: 200px;
  }
  &.location {
    max-width: 200px;
  }
`;
