import { reducerWithInitialState } from 'typescript-fsa-reducers'
import {Image, ImagesState} from "~store/images/images.interfaces";
import {addImage, deleteImageById, setImages} from "~store/images/images.actions";

const INITIAL_STATE: ImagesState = {
    images: []
}

const resetIds = (images: Image[]): Image[] => {
    let uid = -1;
    return images.map(image => {
        uid++;
        return {
            id: uid,
            data: image.data
        }
    })
}

export const ImagesReducer = reducerWithInitialState(INITIAL_STATE)
    .case(addImage, (state, payload) => {
        let newImages = [{
                data: payload,
                id: 0
            }, ...state.images]

        return {
            images: resetIds(newImages)
        }
    })
    .case(setImages, (state, payload) => {
      return {
        images: payload
      }
    })
    .case(deleteImageById, (state, payload) => {
      let filteredImages = state.images.filter(a => a.id !== payload);
      return {
        images: filteredImages
      }
    })