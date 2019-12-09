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
  padding: 0;
  flex-basis: 43rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

export const Col1Inner = styled.div`
  margin-top: 10rem;
  max-width: 36rem;
  line-height: 1.15;
  white-space: normal;
  > p {
    margin-top: 8rem;
    font-size: 1.9rem;
    color: #000000;
  }
  > span {
    display: block;
    margin-top: 2rem;
    font-size: 1.9rem;
    margin-bottom: 9rem;
    text-align: right;
  }
`;

export const Col2 = styled.div`
  height: 48rem;
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

export const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
  width: 38px;
  height: 38px;
  border: 1px solid #008a93;
  border-radius: 50%;
  padding: 8px;
  color: #008a93;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`;

export const Counter = styled.span`
  margin-left: 2rem;
  margin-right: 2rem;
  color: #008a93;
  font-size: 1.75rem;
`;
