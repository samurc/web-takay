import styled, { css } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const ButtonOpen = styled(Link)`
  position: fixed;
  right: -13px;
  width: 46px;
  background: #ec6707;
  top: 155px;
  color: #fff;
  border-radius: 10px;
  animation: 2s balanceo infinite;
  font-size: 1.5rem;
  line-height: 17px;
  font-weight: bold;
  padding: 8px;
  z-index: 10;
  cursor: pointer;
  ${props =>
    props.pagina == 'experto' &&
    css`
      background-color: #f7ce48;
      border: 1px solid #E4E4E4;
    `};
  @keyframes balanceo {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const TextoVertical = styled.div`
  width: 16px;
  text-transform: uppercase;
  word-wrap: break-word;
  text-align: center;
`;