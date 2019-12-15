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
    .card {
      margin-bottom: 20px;
    }
  }
`;
export const Card = styled.div`
  flex-basis: 360px;
  height: 340px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 14px;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 21px;
    line-height: 17.5px;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  &:hover {
    background: #5b5e59 !important;
    .detail {
      display: flex;
    }
    .step {
      display: none;
    }
  }
  @media only screen and (max-width: 992px) {
    flex: 1;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border-radius: 0;
  }
`;
export const Detail = styled.div`
  display: none;
  text-align: justify;
  font-size: 15px;
  line-height: 25px;
`;
