import styled, { css } from 'styled-components';

export const Grid = styled.div`
  position: relative;
  margin-bottom: 40px;
`;
export const Title = styled.h1`
  color: #f15a22;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;
export const Description = styled.p`
  color: #000000;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
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
  p {
    font-size: 1.5rem;
    text-align: left;
    max-width: 280px;
  }
`;
