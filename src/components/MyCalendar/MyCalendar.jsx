import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function MyCalendar({ setTasks, date, setDate }) {

  const onChange = date => {
    setDate(date);
    console.log("Hello")
    console.log(date)
  };

  return (
    <div>
        <Calendar
        onChange={date => onChange(date)}
        value={date}
        />
        {/* {console.log(date)}
        {date.toDateString(date)} */}
        <button>Add Task</button>
    </div>
  )
}
