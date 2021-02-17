import { all } from 'redux-saga/effects'
import {watchImagesSagas} from "~store/images/images.sagas";

export default function * rootSaga () {
  yield all([
    watchImagesSagas()
  ])
}
