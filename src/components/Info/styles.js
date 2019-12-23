import styled, { css } from 'styled-components';

export const SpanTakay = styled.span`
  font-weight: 900;
  color: #f15a22;
`;

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
  margin: 19rem auto;
  display: flex;
  flex-direction: column;
  max-width: 672px;
  justify-content: center;
  justify-items: center;
  position: relative;
  p {
    font-size: 1.9rem;
  }
  .btn-more {
    margin-top: 3rem;
    a {
      font-size: 1.9rem;
      font-weight: 900;
      background: #00949e;
      padding: 7px 81px;
      color: #ffffff;
      border-radius: 6px;
    }
  }
  @media only screen and (max-width: 992px) {
    margin: 9rem 4rem;
    > p {
      font-size: 1.2rem;
      line-height: 16px;
    }
    .btn-more {
      display: none;
    }
  }
`;
