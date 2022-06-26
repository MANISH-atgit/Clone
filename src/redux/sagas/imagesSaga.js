import { takeEvery, takeLatest } from "redux-saga/effects";
import { call, put } from "redux-saga/effects";
import {
  MOVIELISTDATA,
  REGISTER,
  SEARCH,
  SINGLEMOVIE,
} from "../constants/constants";
import { fetchImages } from "../API/index";
import { fetchSearch } from "../API/searchAPI";
import { singleMovieImages } from "../API/singleMovieImages";
import { register } from "../API/register";

import {
  setMovieList,
  setError,
  setSearchData,
  setSearchError,
  setSingleImagesData,
  setSingleImagesError,
  setRegisterData,
  setRegisterError,
} from "../actions";

function* handleImagesLoad(action) {
  try {
    console.log("action.url", action.url);
    let url = action.url;
    const data = yield call(fetchImages, url);
    yield put(setMovieList(data));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* handleSearchLoad(action) {
  try {
    let title = action.title;
    console.log("title", title);
    const data = yield call(fetchSearch, title);
    yield put(setSearchData(data));
  } catch (error) {
    yield put(setSearchError(error.toString()));
  }
}

function* handleLoadSingleMovie(action) {
  try {
    let id = action.id;
    console.log("id", id);
    const data = yield call(singleMovieImages, id);
    yield put(setSingleImagesData(data));
  } catch (error) {
    yield put(setSingleImagesError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeLatest(MOVIELISTDATA.LOAD, handleImagesLoad);
  yield takeLatest(SEARCH.LOAD, handleSearchLoad);
  yield takeLatest(SINGLEMOVIE.LOAD, handleLoadSingleMovie);
}
