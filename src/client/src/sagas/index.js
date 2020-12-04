import { all } from "redux-saga/effects";
import romsSaga from './romsSaga';

function* rootSaga() {
  yield all([
    romsSaga()
  ]);
}

export default rootSaga;
