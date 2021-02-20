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
        let lastImage = state.images.sort((a,b)=> b.id - a.id)[0]

        return {
            images: [{
                data: payload,
                id: lastImage ? lastImage.id + 1 : 0
            }, ...state.images]
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