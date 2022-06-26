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
          to={item.link}
          state={{
            title: `${item.category}`,
            url: `${item.url}`,
          }}
          key={id}
        >
          {item.Name}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
