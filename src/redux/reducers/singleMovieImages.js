import { SINGLEMOVIE } from "../constants/constants";

let dataImage = {};
let dataTrailer = {};

const singleMovieImage = (state = [], action) => {
  // const dataImage = action.data.imagesData;

  if (action.type === SINGLEMOVIE.LOAD_SUCCESS) {
    state = [];
    {
      console.log(action.data.imagesData);
      console.log(action.data.trailerdata);
    }
    // console.log("Aciton", [...state, action.data]);
    return [...state, action.data];
  }
  return state;
};

export default singleMovieImage;
