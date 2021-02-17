import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const StyledHandle = styled.div`
  position: relative;
  top: -48px;
  left: 0;
  width: 300px;
  height: 300px;
`

export const FeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const FeedImage = styled.div<{ image: string }>`
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
  margin-bottom: 20px;
  
  ${props => css`
    background-image: url(${props.image});
  `}
`