import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowNav from "../../assets/arrowNav/arrowNav";
import ScreenBData from "../../assets/screenB";
import { LoaderOverlay } from "../../assets/loader/loader";
import "./styles/screenB.scss";

export default function ScreenB() {
  const [isFetching, updateIsFetching] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [selected, updateSelected] = useState(undefined);

  const updateSelection = (selected) => {
    updateSelected(selected);
  };

  const { screenType } = location.state;
  const screenDetails = ScreenBData.filter(
    (details) => details.type === screenType
  );

  const clickHandler = async () => {
    if (selected === undefined)
      navigate("../screenc", { state: { option: selected } });
    else if (selected) {
      try {
        updateIsFetching(true);
        var submitSelection = await fetch(
          "http://localhost:3000/rSubmitSelection"
        );
        if (
          submitSelection.status === 200 &&
          window.location.hostname.includes("screenb") !== -1
        )
          navigate("../screenc", { state: { option: selected } });
        else if (submitSelection.status !== 200) throw new Error("");
      } catch (error) {
        updateIsFetching(false);
        alert("Fetch API failed");
      }
    } else {
      alert("Please select an option");
    }
  };

  return (
    <div
      className="screenB-ctr"
      style={{ backgroundColor: screenDetails[0].bgColor }}
    >
      {isFetching && (
        <LoaderOverlay url={"http://localhost:3000/rSubmitSelection"} />
      )}
      <div className="page-content">
        {screenDetails[0].getPageContent({
          update: updateSelection,
          selected: selected,
        })}
      </div>
      <div className="nav-arrow">
        <ArrowNav navFunction={clickHandler} />
      </div>
    </div>
  );
}
