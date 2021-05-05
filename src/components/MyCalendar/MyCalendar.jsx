import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function MyCalendar({ setTasks }) {
  const [date, setDate] = useState(new Date());
  


  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
        <Calendar
        onChange={onChange}
        value={date}
        />
        {console.log(date)}
        {date.toDateString(date)}
        <button>Add Task</button>
    </div>
  )
}
