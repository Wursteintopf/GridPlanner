import {addImage, deleteSavedImages, loadImages, parseImage, saveImages, setImages} from "~store/images/images.actions";
import { put, takeEvery } from 'redux-saga/effects'
import { getBase64 } from "~util/base64";

function * parseImageSaga (action) {
  const base64 = yield getBase64(action.payload);
  yield put(addImage(base64));
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