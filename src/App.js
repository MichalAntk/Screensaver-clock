import React from "react";
import './App.css';
import Clock from "./components/clock/Clock";
import DateDisplay from "./components/date/DateDisplay";
import Notes from "./components/notes/Notes";

function App() {
  return (
    <div className="center">
      <div>
        <Clock />
      </div>
      <div>
        <DateDisplay />
      </div>
      <div>
        <Notes />
      </div>
    </div>
  );
}

export default App;

