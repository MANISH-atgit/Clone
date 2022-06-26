import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../../assets/images/logo-NavbarLink.png";
import closeButtonNavlink from "../../../assets/images/close-button-NavLink.png";

import Links from "./Links/Links";

import { useDispatch } from "react-redux";
import { navbarClicked } from "../../../redux/actions/index";

import "./NavLink.css";

function NavLinks({ slide }) {
  const dispatch = useDispatch();

  const toggled = () => {
    dispatch(navbarClicked());
  };

  const Movies = [
    {
      category: "Top 250 Movies",
      url: "Top250Movies",
    },
    {
      category: "popular",
      url: "MostPopularMovies",
    },
    {
      category: "Top Box Office",
      url: "BoxOffice",
    },
  ];
  const TV = [
    {
      category: "Top 250 TV Shows",
      url: "Top250TVs",
    },
    {
      category: "Popular TV Shows",
      url: "MostPopularTVs",
    },
    {
      category: "Rating",
      url: "MostPopularTVs",
    },
  ];
  const Awards = [
    {
      category: "Academy Awards",
      url: "ComingSoon",
    },
    {
      category: "Other Awards",
      url: "Top250Movies",
    },
  ];
  return (
    <div className="container NavLinks" style={slide}>
      <div className="NavLink-logo">
        <img src={logo} />
        <span className="close-button">
          <img src={closeButtonNavlink} onClick={toggled} />
        </span>
      </div>
      <div className="LinkCards">
        <Links title="Movies" List={Movies} />
        <Links title="TV Shows" List={TV} />
        <Links title="Awards" List={Awards} />
      </div>
    </div>
  );
}

export default NavLinks;
