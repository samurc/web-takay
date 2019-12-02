import styled, { css } from 'styled-components';

export const Grid = styled.div`
  position: relative;
  margin-bottom: 40px;
`;
export const Title = styled.h1`
  color: #f15a22;
  font-size: 7.2rem;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;
export const Description = styled.p`
  color: #656565;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;
export const LayoutRow = styled.div`
  display: flex;
  .card:first-child {
    background: #f15a22;
    color: #ffffff;
    margin-right: 7.6rem;
  }
  .card:last-child {
    background: #f7ce48;
    color: #6d6e71;
  }
`;
export const Card = styled.div`
  border-radius: 14px;
  padding: 5.6rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  i {
    font-size: 5.5rem;
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 5rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.8rem;
    text-align: left;
  }
`;
