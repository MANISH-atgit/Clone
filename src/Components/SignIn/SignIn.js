import React from "react";

import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import WhatToWatch from "../WhatToWatch/WhatToWatch";

import { NavLink } from "react-router-dom";

function SignIn() {
  const mystyle = {
    display: "flex",
  };
  return (
    <div className="Login-main container-fluid">
      <div className="container">
        <div className="Login-child">
          <WhatToWatch
            heading=""
            recommend=""
            title="Sign In"
            text="Sign In to access your account"
            icons={mystyle}
          />
          <div className="container Login-container">
            <FontAwesomeIcon icon={faAdd} className="Login-Icon" />
            <div className="Sign-in-to-watchlist">
              Sign in to access your Watchlist
            </div>
            <div className="Save-shows-and-movies">
              Save shows and movies to keep track of what you want to watch.
            </div>
            <NavLink to="/signin" className="Sign-in-to-IMDb">
              Sign in to IMDb
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
