import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Links.css";

function Links(props) {
  const { title, List } = props;

  return (
    <div className="Link">
      <h4 className="Heading">{title}</h4>

      {List.map((item, id) => (
        <NavLink
          className="links"
          to={item.url}
          state={{
            title: `${item.category}`,
            url: `https://imdb-api.com/en/API/${item.url}/k_28734vj4`,
          }}
          key={id}
        >
          {item.category}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
