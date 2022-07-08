import React, { useState } from "react";
import RouterData from "./assets/routerData";
import Login from "./views/login/login";
import "./App.scss";

function App() {
  const [sessionId, updateSessionId] = useState(null);

  if (!sessionId) return <Login updateSessionId={updateSessionId} />;

  return (
    <div className="App">
      <RouterData />
    </div>
  );
}

export default App;
