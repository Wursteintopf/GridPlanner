import { createSelector } from 'reselect'
import { RootState } from '../root.reducer'

const selectImagesState = (state: RootState) => state.images;

export const getImages = createSelector(
  selectImagesState,
  images => images.images
)