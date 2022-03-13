import React, { useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {

  const customButtons = {
    custom1: {
      text: "+",
      hint:  "hint for button",
      click: function () {
        alert("custom button clicked!");
      }
    },

    custom2:{
      text: "hello",
    }
  };

  return (
    <div className="Calendar">
      <div className="calendarContainer">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          customButtons={customButtons}
          headerToolbar={{
            left: "custom1",
            center: "title",
            right: "today prev,next",
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;
