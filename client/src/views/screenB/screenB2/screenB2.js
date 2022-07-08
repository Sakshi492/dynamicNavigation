import React, { useEffect } from "react";
import ScreenBData from "../../../assets/screenB";
import "./screenB2.scss";

export default function ScreenB2(props) {
  const { optionHead, optionList } = ScreenBData[1].optionDetails;
  const selected = props.selected;

  useEffect(() => {
    props.update(null);
  }, []);

  const updateChoice = (option) => {
    if (option === selected) props.update(null);
    else props.update(option);
  };

  const optionElem = optionList.map((option) => {
    return (
      <li
        className="option-elem"
        key={option}
        onClick={() => updateChoice(option)}
      >
        <input
          type="checkbox"
          className="option-input"
          value={option}
          onChange={() => updateChoice(option)}
          checked={option === selected}
        />
        <div className="option-label">{option}</div>
      </li>
    );
  });

  return (
    <div className="screenB2-ctr">
      <div className="option-head">{optionHead}</div>
      <ul className="option-list">{optionElem}</ul>
    </div>
  );
}
