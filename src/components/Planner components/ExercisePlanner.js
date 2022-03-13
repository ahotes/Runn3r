import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Form, Button } from 'react-bootstrap';
import './ExercisePlanner.css';

function ExercisePlanner() {
    // calories burned formula: time * (3.5 * MET) (weight(kilograms)) / 200
    // kilogram -> lbs: lbs/2.205

    // function getCaloriesBurned ({time, weight, met}) {
    //     return time * (3.5 * met) * (weight/2.205) / 200
    // }

    function setWeeklyEvents(){
        return;
    }

    return (
        <div>
            <Form>
                <Button>Add</Button>
                <div id='calendar'>
                <FullCalendar
                className='calendar-comp'
                onMouseOver={<button onClick={setWeeklyEvents}></button>}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridWeek'
                themeSystem={'bootstrap'}
                headerToolbar={false}
                height={400}
                selectable={true}
                dayHeaderFormat={{weekday: 'short'}}
                />
                </div>
            </Form>
        </div>
    )
}

export default ExercisePlanner
