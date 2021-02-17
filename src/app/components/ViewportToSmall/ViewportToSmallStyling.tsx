import styled from "@emotion/styled";
import themeVariables from "~style/themeVariables";
import {css} from "@emotion/react";

export const StyledViewportToSmall = styled.div<{ ignored?: boolean }>`
  display: none;
  position: absolute;
  top: 100px;
  color: #ffffff;
  width: 100%;
  z-index: 9000;

  @media screen and (max-width: 960px) {
    ${props => css`
      display: ${props.ignored ? 'none' : 'block'};
    `}
  }
`

export const ViewportToSmallBox = styled.div`
  margin: 20px;
  background-color: ${themeVariables.blue};
  border-radius: 20px;
  padding: 30px;
  text-align: center;
`