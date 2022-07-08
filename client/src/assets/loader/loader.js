import React, { useEffect, useState } from "react";
import "./loader.scss";

export default function Loader(props) {
  const [counter, updateCounter] = useState(props.counter);

  useEffect(() => {
    if (counter !== null && counter !== 1) {
      setTimeout(() => {
        updateCounter(counter - 1);
      }, 1000);
    }
  }, [counter]);

  return (
    <div className="loader-ctr">
      <div className="loader">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {props.text && (
        <div className="loader-text">
          {props.text}
          {props.counter && counter}
        </div>
      )}
    </div>
  );
}

export function LoaderOverlay(props) {
  return (
    <div className="loader-overlay">
      <Loader text={`Submitting response to ${props.url}`} />
    </div>
  );
}
