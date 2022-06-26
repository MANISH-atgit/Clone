import { SEARCH } from "../constants/constants";

const searchReducer = (state = [], action) => {
  if (action.type === SEARCH.LOAD_SUCCESS) {
    state = [];
    return [...state, { ...action.data }];
  }

  return state;
};

export default searchReducer;
