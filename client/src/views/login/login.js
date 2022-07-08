import React, { useEffect, useState } from "react";
import Loader from "../../assets/loader/loader";
import "./login.scss";

export default function Login(props) {
  const [counter, updateCounter] = useState(0);

  useEffect(() => {
    const attemptLogin = async () => {
      try {
        var loginData = await fetch("http://localhost:3000/rLogin");
        loginData = await loginData.json();
        if (loginData.sessionId) {
          props.updateSessionId(loginData.sessionId);
        }
      } catch (error) {
        updateCounter(counter + 1);
      }
    };
    if (counter < 2) {
      attemptLogin();
    }
  }, [counter]);

  var loginElemText = "Logging in.";

  if (counter === 1) {
    loginElemText = "Login Failed. Retrying.";
  } else if (counter >= 2) {
    loginElemText = "Login attempt failed.";
  }

  const loaderElem = (
    <div className="login-loader">
      <Loader />
    </div>
  );

  return (
    <div className="login-ctr">
      {counter < 2 && loaderElem}
      {loginElemText}
    </div>
  );
}
