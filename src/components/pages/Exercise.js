import React, { useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {Form, Button, Nav, Tab, Tabs, FormControl, Card,} from "react-bootstrap";
import Tippy from "@tippyjs/react";
import exerciseplanner from "../exercise/ExercisePlanner";
import { Link } from "react-router-dom";
import { axios } from "axios";

import 'tippy.js/dist/tippy.css';
import "./Exercise.css";

function ExercisePlanner() {
  // calories burned formula: time * (3.5 * MET) (weight(kilograms)) / 200
  // kilogram -> lbs: lbs/2.205

  // function getCaloriesBurned ({time, weight, met}) {
  //     return time * (3.5 * met) * (weight/2.205) / 200
  // }

  const userDataInput = {
    data: {
      exercise: [],

    }
  };

  function gatherData(url){
    const response = fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((reason) => {
      console.log(reason);
      return 'No results found.';
    });
  }

  const [searchText, setSearchText] = useState('');
  const [searchOption, setSearchOption] = useState(0);
  return (
      <div className="exercise-view">
        <Tabs className="bg-dark tab-selector" variant="pills" defaultActiveKey="second">
          <Tab eventKey="first" title="Build">
            <h1>Build an exercise routine</h1>
          </Tab>
          <Tab eventKey="second" title="Search">
            <div className="secondTab">
              <span><h1 className="text-white">Search exercises</h1></span>
              <label for="musclegrp" className="text-white fw-bold">Muscle Group</label>
              <select id="musclegrp" className="customSelect form-select form-select-md" name="musclegrp">
                <option value="0" selected>All</option>
                <option value="1">Arms</option>
                <option value="2">Back</option>
                <option value="3">Chest</option>
                <option value="4">Legs</option>
              </select>
              <input className="form-search mt-3" type="search" placeholder="Start typing to search for a exercise"/>
            </div>
          </Tab>
          <Tab eventKey="third" title="View">
            <h1>View saved plans</h1>
          </Tab>
        </Tabs>
      </div>
  );
}

export default ExercisePlanner;
