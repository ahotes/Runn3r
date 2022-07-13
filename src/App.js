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
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App-layout">
        <Router>
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
        </Router>
      </div>
    </>
  );
}

export default App;
