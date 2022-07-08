import React, { useEffect } from "react";
import ScreenBData from "./../../../assets/screenB";
import "./screenB1.scss";

export default function ScreenB1(props) {
  const { optionHead, optionList } = ScreenBData[0].optionDetails;

  const selected = props.selected;

  useEffect(() => {
    props.update(null);
  }, []);

  const updateChoice = (choice) => {
    if (choice === selected) props.update(null);
    else props.update(choice);
  };

  const optionListElem = optionList.map((optionElem) => {
    return (
      <li
        key={optionElem}
        className={`option-elem ${selected === optionElem ? "selected" : null}`}
        onClick={() => updateChoice(optionElem)}
      >
        {optionElem}
      </li>
    );
  });

  return (
    <div className="screenB1-ctr">
      <div className="option-head">{optionHead}</div>
      <ul className="option-list">{optionListElem}</ul>
    </div>
  );
}
