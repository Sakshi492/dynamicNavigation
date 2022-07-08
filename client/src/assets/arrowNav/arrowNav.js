import React from "react";
import "./arrowNav.scss";

export default function ArrowNav(props) {
  return (
    <div
      className={`arrow ${props.rotated ? "rotated" : ""}`}
      onClick={props.navFunction}
    ></div>
  );
}
