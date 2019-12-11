import styled from 'styled-components';

export const Layout = styled.div`
  padding: 8rem 20rem;
  display: flex;
  @media only screen and (max-width: 992px) {
    padding: 1rem;
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
`;
export const Col2 = styled.div``;
export const Col2Inner = styled.div`
  max-width: 43.5rem;
`;
export const Title1 = styled.h3`
  font-size: 3.75rem;
  line-height: 45px;
  margin-bottom: 2rem;
  color: #000000;
  text-transform: uppercase;
`;
export const Title2 = styled.h2`
  font-size: 6rem;
  color: #f15a22;
  text-transform: uppercase;
  margin-bottom: 4rem;
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
    font-size: 1.3rem;
  }
  input,
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
    font-size: 1.5rem;
    padding: 0.3rem 4.5rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
