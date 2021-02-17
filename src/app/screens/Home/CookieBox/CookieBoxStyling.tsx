import {keyframes} from "@emotion/react";
import styled from "@emotion/styled";
import themeVariables from "~style/themeVariables";
import {InternalLink} from "~style/GlobalStyles";

const verticalMove = keyframes`
  100% {
    background-position: -80px 0;
  }
`

export const MainTitle = styled.h1`
  font-size: 80px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  background-color: ${themeVariables.orange};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
  background-size: 80px 100%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${verticalMove}  5s linear infinite;
`

export const StyledCookieBox = styled.div`
  width: 900px;
  margin: 100px auto;
`

export const SubTitle = styled.h2`
  color: ${themeVariables.blue};
  font-size: 42px;
  text-align: center;
`

export const StartButton = styled(InternalLink)`
  text-align: center;
`

export const MoreInformation = styled.p`
  color: ${themeVariables.blue};
  font-size: 18px;
  text-align: center;
  margin-top: 200px;
`