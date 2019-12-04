import styled, { css } from 'styled-components';

export const Grid = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 100px;
    width: 8px;
    background: #00949e;
    bottom: -5px;
    left: 0;
    border-radius: 4px;
  }
  @media only screen and (max-width: 992px) {
    &:before {
      content: none;
    }
  }
`;

export const Box = styled.div`
  margin: 21rem auto;
  font-size: 1.9rem;
  display: flex;
  flex-direction: column;
  max-width: 672px;
  justify-content: center;
  justify-items: center;
  position: relative;
  .btn-more {
    margin-top: 2.5rem;
    a {
      background: #00949e;
      padding: 5px 60px;
      color: #ffffff;
      border-radius: 6px;
    }
  }
  @media only screen and (max-width: 992px) {
    margin: 8rem 4rem;
    font-size: 1rem;
    .btn-more {
      display: none;
    }
  }
`;
