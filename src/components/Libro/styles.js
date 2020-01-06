import styled, { css } from 'styled-components';

export const Grid = styled.div`
  max-width: 940px;
  position: relative;
  margin-top: 90px;
  margin-bottom: 40px;
  @media only screen and (max-width: 992px) {
    margin-top: 60px;
  }
`;

export const Box = styled.div`
  display: flex;
  @media only screen and (max-width: 992px) {
    padding: 2rem;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-size: 6rem;
  color: #f15a22;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 9rem;
  @media only screen and (max-width: 992px) {
    font-size: 30px;
    line-height: 29px;
    margin-bottom: 4rem;
  }
`

export const Col1 = styled.div`
  flex: 1;
`

export const Col1Inner = styled.div`
  max-width:  390px;
  text-align: justify;
  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 992px) {
    h2 {
      font-size: 22px;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

export const Col2 = styled.div`
  flex: 1;
`

export const Col2Inner = styled.div`
  max-width: 430px;
  h2 {
    font-size: 21px;
    font-weight: 900;
    margin-bottom: 20px;
    margin-top: 20px;
    &.first {
      margin-top: 0;
    }
  }
  p {
    font-size: 13px;
    line-height: 20px;
  }
  @media only screen and (max-width: 992px) {
    h2 {
      font-size: 13px;
    }
  }
`

export const Form = styled.form`
  > div {
    margin-bottom: 10px;
  }
  label {
    font-size: 1.3rem;
  }
  input:not([type='checkbox']),
  select {
    border: 0;
    padding: 4px;
    background: #e4e4e4;
    height: 28px;
    outline: none;
  }
  textarea {
    border: 0;
    padding: 4px;
    background: #e4e4e4;
    outline: none;
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
  &.has-error {
    label {
      color: #ff0000;
    }
    input, select, textarea {
      border: 1px solid #ff0000 !important;
      background: rgba(255, 0, 0, 0.22) !important;
    }
  }
  @media only screen and (max-width: 992px) {
    &.checkboxLayout {
      margin-top: 4rem;
    }
  }
`;

export const LayoutRow = styled.div`
  display: flex;
  align-items: center;
`

export const LayoutRadio = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-right: 5px;
  }
  &.first {
    margin-right: 25px;
  }
`

export const Button = styled.button`
  margin-top: 1rem;
  font-weight: 900;
  display: inline-block;
  background: #00949e;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0.5rem 4.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #dddddd;
    cursor: default;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export const Parraph = styled.p`
  ${props => props.error && css`color: #ff0000;`}
  ${props => props.success && css`color: #48B02C;`}
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1.4rem;
  font-weight: bold;
`

export const LdsRing = styled.div`
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 8px;
    border: 8px solid #ccc;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ccc transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`