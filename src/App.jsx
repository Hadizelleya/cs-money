import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import BattlePass from "./components/battle pass/BattlePass";
import Trade from "./pages/trade/Trade";

export default function App() {
  return (
    <>
      {/* <BattlePass /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Trade />} />
      </Routes>
    </>
  );
}
