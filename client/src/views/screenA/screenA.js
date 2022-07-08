import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../assets/loader/loader";
import "./styles/screenA.scss";

export default function ScreenA() {
  const [screenBType, updateScreenBType] = useState(null);
  const [screenElem, updateScreenElem] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        var getScreenB = await fetch("http://localhost:3000/rFetchExperiments");
        getScreenB = await getScreenB.json();
        sessionStorage.setItem("screenA:screenType", getScreenB);
        updateScreenBType(getScreenB);
      } catch (e) {
        alert("Fetch API failed");
        updateScreenElem(
          <div className="screenA-ctr">
            <div className="error-fetch">Error Fetching Data...</div>
          </div>
        );
      }
    };

    if (sessionStorage.getItem("screend:done")) {
      navigate("../screend");
    } else if (sessionStorage.getItem("screenA:screenType")) {
      updateScreenBType(sessionStorage.getItem("screenA:screenType"));
    } else {
      updateScreenElem(
        <div className="screenA-ctr">
          <Loader
            text={
              "Fetching response from http://localhost:3000/rFetchExperiments"
            }
          />
        </div>
      );
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (screenBType !== null) {
      if (screenBType === "screenB1") {
        navigate("../screenb", { state: { screenType: 1 } });
      } else if (screenBType === "screenB2") {
        navigate("../screenb", { state: { screenType: 2 } });
      } else if (screenBType === "screenB3") {
        navigate("../screenb", { state: { screenType: 3 } });
      } else {
        navigate("../screenc");
      }
    }
  }, [screenBType]);

  return screenElem;
}
