import styled from 'styled-components';

export const Layout = styled.div`
  background: #00949e;
  padding: 1rem;
`;

export const LayoutRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 253px;
  height: 253px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 5px;
  &:hover {
    .detail {
      display: block;
    }
    .expert {
      display: none;
    }
  }
  &:nth-child(even) {
    background: #008a93;
  }
  &:nth-child(odd) {
    background: #40afb6;
  }
`;

export const Expert = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 3rem;
`;

export const Detail = styled.div`
  display: none;
  background: #ffffff;
  color: #00949e;
  flex: 1;
  border-radius: 15px;
  padding: 2rem;
`;

export const Name1 = styled.div`
  max-width: 10rem;
  font-size: 1.9rem;
  color: #ffffff;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Cargo1 = styled.div`
  color: #000000;
  font-size: 1.3rem;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 165px;
  height: 165px;
  display: block;
  margin: 0 auto;
`;

export const Name2 = styled.div`
  font-size: 3rem;
  color: #f15a22;
  max-width: 18rem;
  font-weight: bold;
`;

export const Cargo2 = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  max-width: 18rem;
  color: #000000;
  text-align: right;
`;

export const Text = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #000000;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 4.5rem;
  text-transform: uppercase;
  text-align: center;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const Dot = styled.div`
  position: relative;
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
  &:before {
    font-family: slick;
    font-size: 40px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    color: #ffffff;
  }
`;
