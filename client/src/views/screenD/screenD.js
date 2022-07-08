import React from "react";
import Success from "../../assets/success/success";
import "./styles/screenD.scss";

export default function ScreenD() {
  sessionStorage.setItem("screend:done", true);
  return (
    <div className="screenD-ctr">
      <div className="done-ctr">
        <Success />
      </div>
    </div>
  );
}
