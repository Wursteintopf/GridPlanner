import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const StyledDropZone = styled.div<{ draggedOver: boolean }>`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => css`
    border: ${props.draggedOver ? '2px' : '1px'} dashed black;
  `}
`