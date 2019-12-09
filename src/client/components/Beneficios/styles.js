import styled from 'styled-components';

export const Layout = styled.div`
  background: #f7ce48;
  padding: 4rem 7.5rem;
`;

export const Title = styled.h1`
  text-align: center;
  color: #6d6e71;
  font-size: 6rem;
  margin-bottom: 7rem;
  text-transform: uppercase;
`;

export const LayoutRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  margin-top: 3rem;
  min-width: 250px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Text = styled.div`
  margin-top: 4rem;
  text-align: center;
  font-size: 1.9rem;
  color: #fff;
`;
