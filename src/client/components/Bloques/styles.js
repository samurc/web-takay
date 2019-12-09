import styled, { css } from 'styled-components';

export const Grid = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const LayoutRow = styled.div`
  display: flex;
  justify-content: center;
  .card {
    background: #f7ce48;
    color: #ffffff;
  }
  .card:first-child {
    background: #f15a22;
    color: #ffffff;
    margin-right: 6.5rem;
  }
  .card:last-child {
    background: #00949e;
    margin-left: 6.5rem;
  }
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    .card:first-child {
      margin-bottom: 20px;
    }
  }
`;
export const Card = styled.div`
  flex-basis: 400px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 14px;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img {
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 37.5px;
    line-height: 1.3;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 992px) {
    flex: 1;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border-radius: 0;
  }
`;
