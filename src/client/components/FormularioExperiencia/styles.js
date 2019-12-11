import styled from 'styled-components';

export const Layout = styled.div`
  padding: 8rem 20rem;
  display: flex;
  @media only screen and (max-width: 992px) {
    padding: 3rem 2rem;
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
  max-width: 36rem;
  @media only screen and (max-width: 992px) {
    max-width: 100%;
  }
`;
export const Text = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-family: 'Source Serif Pro', serif;
  @media only screen and (max-width: 992px) {
    font-size: 10px;
    margin-bottom: 1rem;
  }
`;
export const Col2 = styled.div``;
export const Col2Inner = styled.div`
  max-width: 43.5rem;
`;
export const Title1 = styled.h3`
  font-size: 3.75rem;
  line-height: 45px;
  color: #6d6e71;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-weight: 900;
  @media only screen and (max-width: 992px) {
    font-size: 25px;
    line-height: 30px;
    color: #f7ce48;
    margin-bottom: 1rem;
  }
`;
export const Title2 = styled.h2`
  font-size: 6rem;
  color: #f7ce48;
  text-transform: uppercase;
  margin-bottom: 3rem;
  @media only screen and (max-width: 992px) {
    display: none;
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
    font-size: 1.5rem;
    font-family: 'Source Serif Pro', serif;
  }
  input:not([type='checkbox']),
  select {
    border: 0;
    padding: 4px;
    background: #e4e4e4;
    height: 28px;
  }
  @media only screen and (max-width: 992px) {
    label {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.div`
  margin-top: 1rem;
  > a {
    font-weight: 900;
    display: inline-block;
    background: #6d6e71;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 0.5rem 4.3rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
