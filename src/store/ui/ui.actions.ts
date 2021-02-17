import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const gridChanged = actionCreator<void>('UI_GRID_CHANGED')
export const resetGridChange = actionCreator<void>('UI_GRID_CHANGED_RESET')
export const useOnSmallDevice = actionCreator<void>('UI_USE_ON_SMALL_DEVICE')