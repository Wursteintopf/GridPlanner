import { createSelector } from 'reselect'
import { RootState } from '../root.reducer'

const selectUiState = (state: RootState) => state.ui;

export const getGridChanged = createSelector(
  selectUiState,
  state => state.gridChanged
)

export const getSmallIgnored = createSelector(
  selectUiState,
  state => state.useOnSmallDevice
)