import styled, { css } from 'styled-components';

export const Grid = styled.div`
  position: relative;
  margin-bottom: 40px;
`;
export const Title = styled.h1`
  color: #f15a22;
  font-size: 6rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  @media only screen and (max-width: 992px) {
    font-size: 4rem;
    line-height: 43px;
    margin-bottom: 2rem;
  }
`;
export const Description = styled.p`
  color: #000000;
  font-size: 1.5rem;
  line-height: 33px;
  text-align: center;
  margin-bottom: 2.5rem;
  @media only screen and (max-width: 992px) {
    font-size: 1rem;
    line-heiht: 18px;
    margin-bottom: 2rem;
  }
`;
export const LayoutRow = styled.div`
  display: flex;
  justify-content: center;
  .card:first-child {
    background: #f15a22;
    color: #ffffff;
    margin-right: 6.5rem;
  }
  .card:last-child {
    background: #f7ce48;
    color: #6d6e71;
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
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img {
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 37.5px;
    line-height: 1.3;
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    @media only screen and (max-width: 992px) {
      font-size: 25px;
      line-heiht: 18px;
      margin-bottom: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    text-align: left;
    max-width: 280px;
    @media only screen and (max-width: 992px) {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 992px) {
    flex: 1;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border-radius: 0;
    padding: 5rem;
  }
`;
