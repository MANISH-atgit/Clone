import React, { useEffect } from "react";
import "./Search.css";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Search(props) {
  let SeacrhData;
  console.log(props);
  try {
    SeacrhData = props.props[0].results.map((item) => (
      <>
        <Row className="search-row">
          <Col lg={1} className="search-float-image">
            <div className="whiteNmae">
              <img src={item.image} />
            </div>
          </Col>
          <Col lg={11} className="search-float-content">
            <NavLink
              to={`/title/${item.id}`}
              state={item.id}
              className="search-NavLink"
            >
              <div>{item.title}</div>
            </NavLink>
            <div>{item.description}</div>
          </Col>
        </Row>
        <hr className="search-hr" />
      </>
    ));
  } catch (error) {
    console.log(error);
  }
  return <Container className="SearchPop">{SeacrhData}</Container>;
}

export default Search;
