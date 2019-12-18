import styled, { css } from 'styled-components';

export const Layout = styled.div`
  padding: 8rem 20rem;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    padding: 2rem;
    flex-direction: column;
  }
`;
export const Col1 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10rem;
  @media only screen and (max-width: 992px) {
    margin-right: 0;
  }
`;
export const Col1Inner = styled.div`
  max-width: 43rem;
  @media only screen and (max-width: 992px) {
    max-width: 100%;
  }
`;
export const Text = styled.p`
  font-size: 15px;
  line-height: 20px;
  @media only screen and (max-width: 992px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
export const Col2 = styled.div``;
export const Col2Inner = styled.div`
  max-width: 43.5rem;
`;
export const Title1 = styled.h3`
  font-size: 3.75rem;
  line-height: 45px;
  font-weight: 900;
  color: #6d6e71;
  text-transform: uppercase;
  @media only screen and (max-width: 992px) {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 2rem;
  }
`;
export const Title2 = styled.h2`
  font-size: 6rem;
  color: #f15a22;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 2rem;
  ${props =>
    props.mode == 'mobile' &&
    css`
      display: none;
    `};
  @media only screen and (max-width: 992px) {
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    ${props => props.mode == 'desktop' && css`display: none;`};
    ${props => props.mode == 'mobile' && css`display: block;`};
  }
`;

export const LayoutRow = styled.div`
  display: flex;
  &.flex-items > div:nth-child(1) {
    margin-right: 10px;
  }
  &.flex-items > div {
    flex: 1;
  }
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    &.flex-items > div:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

export const LayoutColumn = styled.div`
  display: flex;
  flex-direction: column;
  &.checkboxLayout {
    input {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  > div {
    margin-bottom: 10px;
  }
  label {
    font-size: 1.3rem;
  }
  input,
  textarea,
  select {
    border: 0;
    padding: 4px;
    background: #e4e4e4;
  }
`;

export const Button = styled.div`
  margin-top: 1rem;
  > a {
    font-weight: 900;
    display: inline-block;
    background: #00949e;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.3rem;
    padding: 0.3rem 4.5rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
