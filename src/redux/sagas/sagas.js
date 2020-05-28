import { call, put, takeEvery, all } from "redux-saga/effects";
import * as api from "./api";

export function* fetchSongs({ payload }) {
         try {
           const output = yield call(api.getSongs, payload);
           yield put({ type: "FETCH_SONGS_SUCCESS", payload: output });
         } catch (error) {
          //  console.log("fetch posts error", error);
         }
       }

function* watchFetchSongs() {
  yield takeEvery("FETCH_SONGS", fetchSongs);
}

export function* clearSongs() {
  try {
    const output = yield call(api.clearSongs);
    yield put({ type: "CLEAR_SONGS_SUCCESS", payload: output });
  } catch (error) {
    // console.log("clear posts error", error);
  }
}

function* watchClearSongs() {
  yield takeEvery("CLEAR_SONGS", clearSongs);
}

export default function* rootSaga() {
    yield all([
        watchFetchSongs(),
        watchClearSongs()
    ]);
};