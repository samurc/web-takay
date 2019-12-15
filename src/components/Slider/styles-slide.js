import styled, { css } from 'styled-components';

export const SlideUI = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`;
export const Article = styled.article`
  display: flex;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    padding-bottom: 3.5rem;
    position: relative;
  }
`;

export const Col1 = styled.div`
  padding: 13rem 0 0 0;
  flex-basis: 77rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    padding: 3rem;
    flex: none;
  }
`;

export const Col1Inner = styled.div`
  position: relative;
  max-width: 59rem;
  line-height: 1.15;
  white-space: normal;
  > h1 {
    font-size: 3.75rem;
    line-height: 45px;
    color: #f15a22;
    font-weight: 900;
  }
  ${props =>
    props.theme == 'yellow' &&
    css`
      h1 {
        color: #f7ce48;
      }
    `};
  @media only screen and (max-width: 992px) {
    position: initial;
    > h1 {
      font-size: 15px;
      line-height: 20px;
      font-weight: 900;
    }
  }
`;

export const Col2 = styled.div`
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 992px) {
    flex: none;
    height: 400px;
    > div {
      height: 100%;
    }
  }
`;

export const Col2Inner = styled.div`
  background-size: cover;
  background-position: center;
  flex: none;
  width: 100%;
  height: 540px;
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
    font-weight: 900;
    padding: 1rem 4rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.9;
    }
  }
  ${props =>
    props.theme == 'yellow' &&
    css`
      > a {
        background: #6d6e71;
      }
    `};
  @media only screen and (max-width: 992px) {
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

export const Dots = styled.div`
  position: absolute;
  right: 0;
  bottom: 25px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  @media only screen and (max-width: 992px) {
    justify-content: center;
    bottom: -10px;
    width: 100%;
  }
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
  ${props =>
    props.theme == 'yellow' &&
    css`
      &:before {
        color: #f7ce48;
      }
    `};
`;
