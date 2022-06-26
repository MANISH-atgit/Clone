import React from "react";
// import Cards from "../Cards/Card";
// import Grid from "../Grid/Grid";
import MoviePick from "../MoviePick/MoviePick";
import SignIn from "../SignIn/SignIn";
import { useLocation } from "react-router";
// import SingleMovie from "../SingleMovie/SingleMovie";
// import Slider from "../Slider/Slider";

function Home() {
  // const useLocation
  return (
    <div>
      {/* <Grid /> */}
      <MoviePick
        heading="What To Watch"
        recommend="Get More Recommendations"
        title="Box Office of All Time"
        text="TV Shows and Movies just for you"
        // url="https://imdb-api.com/en/API/Top250Movies/k_691fo2uh"
        url="https://imdb-api.com/en/API/BoxOffice/k_67o8cg68"
      />
      <MoviePick
        heading=""
        recommend=""
        title="In Theatre"
        text="TV Shows and Movies just for you"
        // url="https://imdb-api.com/en/API/Top250Movies/k_691fo2uh"
        url="https://imdb-api.com/en/API/Top250Movies/k_67o8cg68"
      />
      <SignIn />
      <MoviePick
        heading=""
        recommend=""
        title="Top Movies"
        text="TV Shows and Movies just for you"
        // url="https://imdb-api.com/en/API/Top250Movies/k_691fo2uh"
        url="https://imdb-api.com/en/API/Top250Movies/k_67o8cg68"
      />

      {/* <Slider /> */}
    </div>
  );
}

export default Home;
