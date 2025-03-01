import React from "react";
import './App.css';
import Clock from "./components/clock/Clock";
import DateDisplay from "./components/date/DateDisplay";
import Stopwatch from "./components/stopwatch/Stopwatch";

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

