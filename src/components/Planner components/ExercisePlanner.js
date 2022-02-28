import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Form } from 'react-bootstrap'
import './ExercisePlanner.scss';

function ExercisePlanner() {
    // calories burned formula: time * (3.5 * MET) (weight(kilograms)) / 200
    // kilogram -> lbs: lbs/2.205

    function getCaloriesBurned ({time, weight, met}) {
        return time * (3.5 * met) * (weight/2.205) / 200
    }

    function setWeeklyEvents(){
        return ;
    }

    return (
        <div>
            <Form>
                <div id='calendar'>
                <FullCalendar
                onMouseOver={<button onClick={setWeeklyEvents}></button>}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridWeek'
                themeSystem={'bootstrap'}
                headerToolbar={false}
                height={400}
                selectable={true}
                themeSystem='standard'
                dayHeaderFormat={{weekday: 'short'}}
                />
                </div>
            </Form>
        </div>
    )
}

export default ExercisePlanner
