import { css } from '@emotion/react'
import themeVariables from "~style/themeVariables";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    height: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    overflow-X: hidden;
    color: ${themeVariables.blue};
    font-size: 16px;
  }
  
  a {
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      outline: 0;
    }
  }
`