import React from "react";
import "./Campaigns.css";
function Campaigns(props) {
  return (
    <div>
      <img className="campaign-image border rounded mr-2" src={props.src}></img>
    </div>
  );
}

export default Campaigns;
