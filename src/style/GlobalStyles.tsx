import styled from "@emotion/styled";
import themeVariables from "~style/themeVariables";
import {css} from "@emotion/react";

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InternalLink = styled.div`
    a {
    background-color: ${themeVariables.orange};
    color: #ffffff;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 18px;
    transition: 0.3s;
    
    svg {
      padding-top: 5px;
    }
    
    &:hover {
      background-color: ${themeVariables.petrol};
    }
  }
`

export const Button = styled.span<{ disabled?: boolean }>`
  background-color: ${themeVariables.orange};
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  transition: 0.3s;
  cursor: pointer;
  
  svg {
    padding-top: 7px;
  }
  
  ${props => css`
    background-color: ${props.disabled ? themeVariables.greys.grey2 : themeVariables.orange};
    
    &:hover {
      background-color: ${props.disabled ? themeVariables.greys.grey2 : themeVariables.petrol};
    }
  `}
`

export const LinkButton = styled.a`
  background-color: ${themeVariables.orange};
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  transition: 0.3s;
  
  svg {
    padding-top: 7px;
  }
  
  &:hover {
    background-color: ${themeVariables.petrol};
  }
`