import React from "react";
import { Routes, Route } from "react-router-dom";
import ScreenA from "../views/screenA/screenA";
import ScreenB from "../views/screenB/screenB";
import ScreenC from "../views/screenC/screenC";
import ScreenD from "../views/screenD/screenD";

export default function RouterData() {
  return (
    <Routes>
      <Route path="/" element={<ScreenA />} />
      <Route path="/screenb" element={<ScreenB />} />
      <Route path="/screenc" element={<ScreenC />} />
      <Route path="/screend" element={<ScreenD />} />
    </Routes>
  );
}
