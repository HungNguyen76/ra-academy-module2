import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Hooks from "./session3/hooks/Hooks";
import Class from "./session2";
import FlipCoin from "./session2/practice/Flipcoin";
import Note from "./components/Note";

export default function Router() {
  return (
      <Routes>
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/practice2/flipCoin" element={<FlipCoin />} />
        <Route path="/session2" element={<Class />} />
        <Route path="/session3" element={<Hooks />} />
        <Route path="/note" element={<Note />} />
        <Route path="/" element={<Homepage />} />
      </Routes>

  );
}
