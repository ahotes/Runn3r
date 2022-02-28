import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// component imports
import Nav from './components/Nav'
import Calendar from './components/Calendar'
import ExercisePlanner from './components/Planner components/ExercisePlanner';

function App() {
  return (
    <div className="App">
      <ExercisePlanner />
    </div>
  );
}

export default App;
