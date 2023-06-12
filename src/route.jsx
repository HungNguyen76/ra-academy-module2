import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Hooks from "./session3/hooks/Hooks";
import Class from "./session2";
import FlipCoin from "./session2/practice/Flipcoin";
import Note from "./components/Note";
import UseState from "./session3/hooks/UseState";
import UseEffect from "./session3/hooks/UseEffect";
import UseContext from "./session3/hooks/UseContext";
import UseMemo from "./session3/hooks/UseMemo";

export default function Router() {
  return (
      <Routes>
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/practice2/flipCoin" element={<FlipCoin />} />
        <Route path="/session2" element={<Class />} />
        <Route path="/session3" element={<Hooks />} />
        <Route path="/note" element={<Note />} />
        <Route path="/hooks/useState" element={<UseState />} />
        <Route path="/hooks/useEffect" element={<UseEffect />} />
        <Route path="/hooks/useContext" element={<UseContext />} />
        <Route path="/hooks/useMemo" element={<UseMemo />} />
        <Route path="/" element={<Homepage />} />
      </Routes>

  );
}
