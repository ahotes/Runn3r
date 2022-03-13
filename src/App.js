import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component imports
import Nav from "./components/Nav";
import Calendar from "./components/Calendar";
import ExercisePlanner from "./components/Planner components/ExercisePlanner";
import FoodPlanner from "./components/Planner components/FoodPlanner";
import Landing from "./components/Landing";

function App() {
  return (
    <>
        <Nav />
        <Landing/>
    </>
  );
}

export default App;
