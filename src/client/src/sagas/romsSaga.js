// watcher saga -> actions -> worker saga
import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import {
  sendRequestAllROMs
} from '../api';
import {
  setAllROMs,
  setNotification
} from '../actions';

function* handleRequestAllROMs() {
  try {
    const allRoms = yield call(() => sendRequestAllROMs());
    yield put(setAllROMs(allRoms));
    if (allRoms.length === 0) {
      yield put(setNotification({type: 'success', message: 'No ROM'}));
    }
    // dispatch data
  } catch (error) {
    // dispatch error
    yield put(setNotification({type: 'error', message: error}));
  }
}

function* watchROMs() {
  yield takeEvery('REQUEST_ALL_ROMS', handleRequestAllROMs);
}

export default watchROMs;
