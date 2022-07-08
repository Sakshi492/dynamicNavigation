import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../assets/loader/loader";
import ArrowNav from "../../assets/arrowNav/arrowNav";
import "./screenC.scss";

export default function ScreenC() {
  const [counter, updateCounter] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (window.location.pathname.includes("screenc")) navigate("../screend");
    }, 3000);
  }, [location.state]);

  const clickHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (counter > 1) {
      setTimeout(() => {
        updateCounter(counter - 1);
      }, 1000);
    }
  }, [counter]);

  return (
    <div className="screenC-ctr">
      <div className="nav-arrow">
        <ArrowNav navFunction={clickHandler} rotated={true} />
      </div>
      <div className="screenB-inner">
        <div className="screen-content">
          <div
            className={`screen-head ${
              location.state && location.state.option ? "show" : ""
            }`}
          >
            {location.state && location.state.option}
          </div>
          <div className="screen-text">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </div>
        </div>
        <div className="screen-loader">
          <Loader text={"Navigating in "} counter={3} />
        </div>
      </div>
    </div>
  );
}
