import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home-page/Home";
import Clock from "./components/clock/Clock";
import DateDisplay from "./components/date/DateDisplay";
import About from "./pages/about-page/About";
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/about" element ={<About />}/>
          <Route path="/stopwatch" element={<Stopwatch />}/>
        </Routes>
      </Router>
      <div className="center">
        <div>
          <Clock />
        </div>
        <div>
          <DateDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;

