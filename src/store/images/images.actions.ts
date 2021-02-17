import actionCreatorFactory from 'typescript-fsa'
import {Image} from "~store/images/images.interfaces";

const actionCreator = actionCreatorFactory()

export const parseImage = actionCreator<any>('IMAGES_PARSE')
export const addImage = actionCreator<string>('IMAGES_ADD')
export const deleteImageById = actionCreator<number>('IMAGES_DELETE_BY_ID')
export const setImages = actionCreator<Image[]>('IMAGES_SET')
export const saveImages = actionCreator<Image[]>('IMAGES_SAVE')
export const loadImages = actionCreator<void>('IMAGES_LOAD')
export const deleteSavedImages = actionCreator<void>('IMAGES_DELETE_SAVED')