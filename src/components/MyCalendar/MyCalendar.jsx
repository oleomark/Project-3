import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { useEffect } from "react";

export default function MyCalendar({ tasks, date, setDate, setTasks, defaultState }) {

  const onChange = date => {
    setDate(date);
  };

  const onClickDay = (date) => {
    const filteredTasks = tasks.filter(task => (new Date(task.startDate)).getDate() == date.getDate());
    setTasks(filteredTasks);
  };

  const handleClick = () => {
    setTasks(defaultState);
  }
  
  return (
    <div>
      	<button type ="button" onClick={() => handleClick()}>ALL TASKS</button>
        <Calendar
        onChange={date => onChange(date)}
        value={date}
        setTasks={setTasks}
        onClickDay={e => onClickDay(e)}
        />
    </div>
  )
}
