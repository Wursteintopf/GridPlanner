import { reducerWithInitialState } from 'typescript-fsa-reducers'
import {UiState} from "~store/ui/ui.interfaces";
import {gridChanged, resetGridChange, useOnSmallDevice} from "~store/ui/ui.actions";

const INITIAL_STATE: UiState = {
  gridChanged: false,
  useOnSmallDevice: false
}

export const UiReducer = reducerWithInitialState(INITIAL_STATE)
  .case(gridChanged, state => {
    return {
      ...state,
      gridChanged: true
    }
  })
  .case(resetGridChange, state => {
    return {
      ...state,
      gridChanged: false
    }
  })
  .case(useOnSmallDevice, state => {
    return {
      ...state,
      useOnSmallDevice: true
    }
  })