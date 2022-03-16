import React from "react";
import "./Favorites.css";
function Favorites(props) {
  return (
    <div className="favorites-box d-flex flex-column justify-content-center align-items-center border border-light rounded ml-1  ">
      <div className="image-box">
        <img className="favorites-image" src={props.src}></img>
        <div className="icon-box text-center bg-white rounded border border-light">
          <i class="fa-solid fa-plus icon-color mt-2"></i>
        </div>
      </div>
      <p className="price-text mt-3">{props.price}</p>
      <p className="title-text mb-2 ">{props.title}</p>
      <p className="count-text mb-2">{props.count}</p>
    </div>
  );
}

export default Favorites;
