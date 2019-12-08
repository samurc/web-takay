import styled from 'styled-components';

export const SlideUI = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`;
export const Article = styled.article`
  display: flex;
`;

export const Col1 = styled.div`
  padding: 13rem 0 0 0;
  flex-basis: 77rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

export const Col1Inner = styled.div`
  max-width: 53rem;
  line-height: 1.15;
  white-space: normal;
  > h1 {
    font-size: 3.75rem;
    color: #f15a22;
  }
`;

export const Col2 = styled.div`
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
`;

export const Col2Inner = styled.div`
  background-size: cover;
  background-position: center;
  flex: none;
  width: 100%;
  height: 100%;
`;

export const Button = styled.div`
  margin-top: 3rem;
  margin-bottom: 11.5rem;
  > a {
    display: inline-block;
    background: #00949e;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.9rem;
    padding: 0.3rem 2.5rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Dot = styled.div`
  position: relative;
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
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
    opacity: 0.25;
    color: #f15a22;
  }
  &.active {
    &:before {
      opacity: 0.75;
    }
  }
`;
