import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { useEffect } from "react";
import {getAll} from '../../utilities/tasks-api';
import { Link } from 'react-router-dom';

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
//   const onClickDay = async (date) => {
//     const tasks = await getAll();
//     const filteredTasks = tasks.filter(task => (new Date(task.startDate)).getDate() == date.getDate());
//     setTasks(filteredTasks);
//     console.log(filteredTasks);
// }
  
  return (
    <div>
      	<button type ="button" onClick={() => handleClick()}>ALL TASKS</button>
        <Link to='/add' class="button">ADD Task</Link>
			&nbsp; &nbsp;
        <Calendar
        onChange={date => onChange(date)}
        value={date}
        setTasks={setTasks}
        onClickDay={e => onClickDay(e)}
        />
    </div>
  )
}
