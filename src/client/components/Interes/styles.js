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
    margin-right: 3.8rem;
  }
  .card:last-child {
    background: #f7ce48;
    color: #6d6e71;
    margin-left: 3.8rem;
  }
`;
export const Card = styled.div`
  flex: 1;
  border-radius: 14px;
  padding: 3.8rem;
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
