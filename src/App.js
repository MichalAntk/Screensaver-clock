import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Clock from "./components/clock/Clock";
import DateDisplay from "./components/date/DateDisplay";

function App() {
  return (
    <div className="center">
      <div>
        <Clock />
      </div>
      <div>
        <DateDisplay />
      </div>
    </div>
  );
}

export default App;

