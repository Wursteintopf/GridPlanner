import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import themeVariables from "~style/themeVariables";

export const Background = styled.div`
  position: absolute;
  z-index: -10; 
`

export const CookieText = styled.p`
  color: ${themeVariables.blue};
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
`

export const Left = styled.div`
  color: ${themeVariables.blue};
  width: 50%;
`

export const Right = styled.div`
  color: ${themeVariables.blue};
  width: 50%;
`

export const SubSubTitle = styled.h3`
  color: ${themeVariables.blue};
  font-size: 30px;
`

export const Text = styled.div`
color: ${themeVariables.blue};
  font-size: 18px;
`