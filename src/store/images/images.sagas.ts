import {addImage, deleteSavedImages, loadImages, parseImage, saveImages, setImages} from "~store/images/images.actions";
import { put, takeEvery } from 'redux-saga/effects'
import { resizedFile } from "~util/resizedFile";

function * parseImageSaga (action) {
  const resized = yield resizedFile(action.payload);
  yield put(addImage(resized));
}

function * saveImagesSaga (action) {
  yield localStorage.setItem('InstaGridImages', JSON.stringify(action.payload));
}

function * loadImagesSaga () {
  let imageString = yield localStorage.getItem('InstaGridImages');
  let images = yield JSON.parse(imageString);
  if (imageString) yield put(setImages(images));
}

function * deleteSavedImagesSaga () {
  yield localStorage.removeItem('InstaGridImages');
  yield put(setImages([]));
}

export function * watchImagesSagas () {
  yield takeEvery(parseImage, parseImageSaga)
  yield takeEvery(saveImages, saveImagesSaga)
  yield takeEvery(loadImages, loadImagesSaga)
  yield takeEvery(deleteSavedImages, deleteSavedImagesSaga)
}