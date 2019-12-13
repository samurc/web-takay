import styled, { css } from 'styled-components';

export const FooterUI = styled.footer`
  ${props =>
    props.theme == 'yellow' &&
    css`
      background-color: #6d6e71;
      h3 {
        color: #f7ce48 !important;
        font-weight: 900;
      }
      .about {
        color: #ffffff;
      }
      .contact {
        color: #ffffff;
      }
      .location {
        color: #ffffff;
      }
    `};
  @media only screen and (max-width: 992px) {
    ${props =>
      props.theme == 'yellow' &&
      css`
        .about {
          margin-top: 8rem;
        }
      `};
  }
`;

export const LayoutRow = styled.div`
  padding: 4rem 20rem 2rem 20rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    padding: 5rem 0;
    padding: 0;
    ${props =>
      props.theme == 'yellow' &&
      css`
        background-color: #6d6e71;
      `};
  }
`;
export const Item = styled.div`
  flex: 1;
  h3 {
    font-size: 15px;
    color: #f15a22;
    margin-left: 10px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
  &.about {
    max-width: 200px;
    margin-right: 10px;
    img {
      margin-bottom: 4.5rem;
    }
    > p {
      word-break: break-all;
      font-size: 15px;
      line-height: 17.5px;
    }
  }
  &.contact {
    max-width: 200px;
    margin-right: 10px;
    > p {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        margin-right: 15px;
      }
    }
    .social {
      display: flex;
    }
  }
  &.location {
    max-width: 200px;
    > p {
      display: flex;
      align-items: flex-start;
      margin-bottom: 10px;
      img {
        margin-right: 15px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    &.about {
      order: 1;
      font-size: 0.8rem;
      max-width: 230px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6rem;
      img {
        margin-bottom: 1rem;
      }
      > p {
        font-size: 8px;
        line-height: 12px;
      }
    }
    &.contact {
      order: 3;
      max-width: 185px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5rem;
      h3 {
        font-weight: 900;
      }
      > p,
      h3 {
        text-align: center;
        margin-left: 0;
        font-size: 14px;
      }
      > p img {
        margin-right: 10px;
      }
      .social {
        margin-top: 4rem;
        justify-content: center;
      }
    }
    &.location {
      order: 2;
      max-width: 185px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 4.5rem;
      h3 {
        font-weight: 900;
      }
      > p,
      h3 {
        text-align: center;
        margin-left: 0;
        font-size: 14px;
      }
      > p img {
        margin-right: 10px;
      }
    }
  }
`;
export const FooterCopyright = styled.div`
  border-top: 1px solid #55b8be;
  padding: 15px 10px;
  text-align: right;
  font-size: 11px;
  ${props =>
    props.theme == 'yellow' &&
    css`
      border-color: #f7ce48;
      color: #ffffff;
    `};
  @media only screen and (max-width: 992px) {
    width: 80%;
    margin: 0 auto;
    font-size: 6px;
  }
`;

export const SocialItem = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #00949e;
  margin-right: 10px;
  ${props =>
    props.theme == 'yellow' &&
    css`
      background: #f7ce48;
    `};
`;
