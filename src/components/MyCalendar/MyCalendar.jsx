import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { useEffect } from "react";
import {getAll} from '../../utilities/tasks-api';

export default function MyCalendar({ tasks, date, setDate, setTasks, defaultState }) {

  const onChange = date => {
    setDate(date);
  };

  const onClickDay = (date) => {
    const filteredTasks = tasks.filter(task => (new Date(task.startDate)).getDate() == date.getDate());
    setTasks(filteredTasks);
  };

  const handleClick = () => {
    async function getTasks(){
      const tasks = await getAll();
      setTasks(tasks);
      setDate(new Date());
    }
    getTasks();
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
