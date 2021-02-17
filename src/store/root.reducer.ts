import { combineReducers } from 'redux'
import {ImagesState} from "~store/images/images.interfaces";
import {ImagesReducer} from "~store/images/images.reducer";
import {UiState} from "~store/ui/ui.interfaces";
import {UiReducer} from "~store/ui/ui.reducer";

export interface RootState {
  images: ImagesState,
  ui: UiState
}

export const rootReducer = combineReducers<RootState>({
  images: ImagesReducer,
  ui: UiReducer
})