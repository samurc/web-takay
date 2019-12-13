import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
  @import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700');
  html {
    font-size: 62.5% ;
  }

  body {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    -webkit-touch-callout: none;
    * {
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
  }

  a, abbr, address, article, aside, audio, b, blockquote, body, caption, cite,
  code, dd, del, dfn, dialog, div, dl, dt, em, fieldset, figure, footer, form, h1,
  h2, h3, h4, h5, h6, header, hgroup, hr, html, i, iframe, img, ins, kbd, label,
  legend, li, mark, menu, nav, object, ol, p, pre, q, samp, section, small, span,
  strong, sub, sup, table, tbody, td, tfoot, th, thead, time, tr, ul, var, video {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, label, p, button, abbr, a, span, small {
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  input:not([type="checkbox"]):not([type="radio"]), button {
    outline: none;
    appearance: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  // -- Remove firefox default style for required inputs
  input[required]:-moz-ui-invalid {
    box-shadow: none;
  }

  textarea {
    resize: none;
  }

  ul { list-style: none; }
  ul:not(.browser-default) { padding-left: 0; list-style-type: none; }
  button { background: transparent; border: 0; outline: 0 }

  #root {
    height: 100%;
    > div {
      height: 100%;
    }
  }

  ::-webkit-scrollbar {
    overflow: visible;
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
    background-clip: padding-box;
    border: 0 solid transparent;
    min-height: 28px;
    box-shadow: inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07);
  }
  ::-webkit-scrollbar-track {
    background-clip: padding-box;
    border: 0 solid transparent;
  }

  .grid{
    max-width: 1344px;
    margin-left: auto;
    margin-right: auto;
  }
  .gridfull{
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .fondocolorceleste{
    background: #00949e;
  }
  .right {
    float: right !important;
  }

  .x-modal-video {
    font-family: var(--fonts-base, "Lato");
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    overflow: auto;
  }
  .x-modal-video > a.x-close {
      cursor: pointer;
      position: fixed;
      top: 5%;
      right: 5%;
      z-index: 2;
      font-size: 2.4rem;
      color: #fff;
      text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
      text-decoration: none;
      z-index: 2;
  }
  .x-modal-video .x-wrapper {
      position: absolute;
      left: 50%;
      top: 50px;
      z-index: 1;
      transform: translateX(-50%);
      *zoom: 1;
      max-width: 111rem;
      width: 100%;
  }
  .x-modal-video .bg-modal-video {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.91);
    z-index: 0;
  }
  .x-modal-video .x-wrapper .header-video {
      font-size: 1.8rem;
      line-height: 1.33;
      margin-bottom: 2rem;
      color: #ffffff;
  }
  .x-modal-video .x-wrapper .x-item {
      position: relative;
  }
  .cover {
    overflow: hidden;
    padding-top: 56.25% ;
    position: relative;
    display: block;
    box-shadow: inset 0px 0px 100px 50px rgba(0, 0, 0, 0.02);
  }
  .x-modal-video .x-wrapper .x-item .media-player > iframe {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
  }
  .x-modal-video .x-wrapper:before, .x-modal-video .x-wrapper:after {
      content: "";
      display: table;
  }
  .x-modal-video .x-wrapper:after {
      clear: both;
  }

  /** Header **/
  @media only screen and (min-width: 601px) {
    
  }
  @media only screen and (min-width: 993px) {
    
  }
`;
