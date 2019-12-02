import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5% ;
  }

  body {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
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
    max-width: 1040px;
    margin-left: auto;
    margin-right: auto;
  }
  .right {
    float: right !important;
  }
  /** Header **/
  @media only screen and (min-width: 601px) {
    .container {
      width: 85%;
    }
  }
  @media only screen and (min-width: 993px) {
    .container {
      width: 70%;
    }
  }
`;
