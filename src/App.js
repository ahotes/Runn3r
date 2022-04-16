import React from "react";
import "./App.css";

// component imports
import Navbar from "./components/navigation/Navbar";
import Settings from "./components/pages/Settings";
import Profile from "./components/pages/Profile";
import Exercise from "./components/pages/Exercise";
import Food from "./components/pages/Food";
import Planner from "./components/pages/Planner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar className="nav" />
          <div className="page-area">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route path="/food" element={<Food />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
