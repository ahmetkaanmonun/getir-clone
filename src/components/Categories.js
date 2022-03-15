import React from "react";
import "./Categories.css";
function Categories(props) {
  return (
    <div className="categories">
      <div className="categories-box d-flex flex-column justify-content-center align-items-center mr-1 ">
        <img
          className="categories-image border rounded mb-2"
          src={props.src}
        ></img>
        <p className="categories-name ">{props.title}</p>
      </div>
    </div>
  );
}

export default Categories;
