import styled, { css } from 'styled-components';

export const Grid = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 80px;
    width: 4px;
    background: #00949e;
    bottom: -5px;
    left: 0;
  }
`;

export const Box = styled.div`
  margin: 16rem auto;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: center;
  justify-items: center;
  position: relative;
  .btn-more {
    margin-top: 3rem;
    a {
      background: #00949e;
      padding: 5px 55px;
      color: #ffffff;
      border-radius: 6px;
    }
  }
`;
