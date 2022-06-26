import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";

import image from "./share.png";
import { loadMovieList } from "../../redux/actions";

import Categories from "./Categories/Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function MovieList() {
  const location = useLocation();
  const datalist = useSelector((state) => state.images);
  const dispatch = useDispatch();

  // console.log(location.state.url);
  let data = Array.from(datalist);
  // console.log(data[0]);

  useEffect(() => {
    dispatch(loadMovieList(location.state.url));
  }, [location.state.url]);

  var list;
  try {
    list = data[0].items.map((user) => (
      <tr>
        <td>
          <img
            className="table-image"
            src={user.image}
            style={{ width: "50px" }}
          />
          <small className="table-row">
            {user.rank}.{" "}
            <NavLink
              to={`/title/${user.id}`}
              state={user.id}
              className="MovieList-NavLink"
            >
              <span className="blueName">{user.title}</span>
            </NavLink>
            {console.log(user.id)}
          </small>
        </td>
        <td
          style={{
            fontSize: "0.8rem",
          }}
        >
          <FontAwesomeIcon
            icon={solidStar}
            style={{
              color: "#f5c518",
              padding: "0 5px",
            }}
            size="lg"
          />
          <b>{user.imDbRating}</b>
        </td>
        <td>
          <FontAwesomeIcon
            icon={thinStar}
            style={{ color: "grey", opacity: "0.5" }}
          />
        </td>
        <td>
          <FontAwesomeIcon icon={faPlus} style={{ color: "grey" }} />
        </td>
      </tr>
    ));
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="MovieList">
      <div className="container MovieList-container">
        <div className="MovieList-main">
          <div className="MovieList-page">
            <div className="MovieList-headerpage">
              <div className="MovieList-head">
                <h5>IMDb Charts</h5>
                <h3 className="MovieList-header">
                  IMDb {location.state.title}
                </h3>
                <small className="MovieList-byline">
                  IMDb {location.state.title} as rated by regular IMDb voters.
                </small>
              </div>
              <div className="image">
                <img src={image} />
              </div>
            </div>
            <hr />
            <div className="MovieList-LowerHeader">
              <div className="MovieList-title">
                <small className="showing">
                  Showing {location.state.title}
                </small>
              </div>
              <div className="MovieList-sort">
                <label for="sort">Sort by : </label>
                <select name="sort" id="sort" form="sortform">
                  <option value="Ranking">Ranking</option>
                  <option value="Release">Release</option>
                </select>
              </div>
            </div>
            <div className="MovieList-list">
              <div>
                <table>
                  <tr style={{ border: "none" }}>
                    <th
                      style={{
                        width: "70%",
                        fontSize: "0.8rem",
                        paddingLeft: "60px",
                      }}
                    >
                      Rank & Title
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">IMDb</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">Your</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th></th>
                  </tr>
                  {list}
                </table>
              </div>
            </div>
          </div>
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default MovieList;
