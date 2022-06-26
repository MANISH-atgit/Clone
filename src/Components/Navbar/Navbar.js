import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { signOut } from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCancel,
  faCaretDown,
  faCross,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.png";
import NavbarLogo2 from "../../assets/images/NavbarLogo2.png";

import "./Navbar.css";
import NavLinks from "./NavbarLink/NavLinks";
import Search from "../Search/Search";

import { useSelector, useDispatch } from "react-redux";
import { loadSearch, loadSignOut } from "../../redux/actions/index";
import { navbarToggle } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navbar() {
  const toggle = useSelector((state) => state.navbarToggle);
  const searchdata = useSelector((state) => state.search);
  const signinData = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let navbarNotToggled = true;
  console.log(signinData);

  const changeState = () => {
    dispatch(navbarToggle(navbarNotToggled));
  };

  console.log(toggle);
  let slide = {};
  toggle ? (slide = { position: "absolute", top: "-100%" }) : (slide = null);
  // //////////////////////////////////////////////////////////////h
  const [search, setSearch] = useState("");
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const handleChange = (event) => {
    setSearch(event.target.value);

    dispatch(loadSearch(event.target.value));
  };

  const optimizedVersion = useCallback(debounce(handleChange), []);
  // //////////////////////////////////////////////////////////////h
  console.log(search);

  const logout = async () => {
    await signOut(auth);
    navigate("/register");
    console.log("logout");
  };

  return (
    <>
      <div className="container-fluid Navbar-main">
        <nav className="container Navbar">
          <NavLink to="/">
            <img className="logo logo1" src={logo} />
          </NavLink>
          <span className="menu" onClick={changeState}>
            <FontAwesomeIcon icon={faBars} className="nav-icons" />
            Menu
          </span>
          <span className="Search">
            <input
              className="search-input"
              type="text"
              placeholder="Search IMDb"
              onChange={optimizedVersion}
              // value={search}
            />
            <FontAwesomeIcon
              icon={faXmark}
              className="iconss"
              style={{
                color: "grey",
                backgroundColor: "#fff",
                padding: "9px 10px",
                borderRadius: "3px",
                marginLeft: "2px",
              }}
              onClick={() => {
                setSearch("");
                document.querySelector(".search-input").value = "";
              }}
            />
          </span>
          <img className="logo logo2" src={NavbarLogo2} />
          <div className="verticle-line"></div>

          <NavLink to="/watchlist" className="watchlist">
            <FontAwesomeIcon icon={faBookmark} className="nav-icons" />
            Watchlist
          </NavLink>

          {signinData == "" ? (
            <NavLink to="/register" className="SignIn">
              Sign In
            </NavLink>
          ) : (
            <button
              className="SignIn"
              onClick={() => {
                logout();
                dispatch(loadSignOut());
              }}
            >
              {/* {signinData} */}
              Sign Out
            </button>
          )}

          <span className="lang">
            EN
            <FontAwesomeIcon icon={faCaretDown} className="nav-icons" />
          </span>
        </nav>
        <NavLinks slide={slide} />
      </div>
      {search ? <Search props={searchdata} /> : null}
      {console.log(search)}
      {/* <Search /> */}
    </>
  );
}

export default Navbar;
