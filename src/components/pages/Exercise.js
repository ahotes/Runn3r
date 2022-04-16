import React, { useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Form, Button } from "react-bootstrap";
import "./Exercise.css";
import Tippy from "@tippyjs/react";

function ExercisePlanner() {
  // calories burned formula: time * (3.5 * MET) (weight(kilograms)) / 200
  // kilogram -> lbs: lbs/2.205

  // function getCaloriesBurned ({time, weight, met}) {
  //     return time * (3.5 * met) * (weight/2.205) / 200
  // }

  function setWeeklyEvents() {
    alert("this is a test");
  }

  return (
    <div className="bgcolor">
      <form>
        <div className="calendarWrapper">
          <Calendar
            className="exerciseCalendar"
            onClick={setWeeklyEvents}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridWeek"
            themeSystem={"bootstrap"}
            headerToolbar={false}
            height={400}
            selectable={true}
            dayHeaderFormat={{ weekday: "short" }}
          />
        </div>
      </form>
    </div>
  );
}

export default ExercisePlanner;
