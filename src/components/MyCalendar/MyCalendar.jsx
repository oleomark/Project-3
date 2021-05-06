import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import TaskList from '../TaskList/TaskList';


export default function MyCalendar({ tasks, date, setDate, setTasks }) {

  const onChange = date => {
    setDate(date);
    // console.log("Hello")
    // console.log(date)
  };

  const onClickDay = (date) => {
    const filteredTasks = tasks.filter( task => task.startDate === date);
    setTasks(filteredTasks);
  };
  
  const dayTasks = new Date( task => task.startDate);
  console.log(dayTasks);
  // tasks.filter(task => {
  //   if (task.startDate === (date))
  //   console.log(date);
  // };


/* I WANT TO RENDER MY TASK PAGE ON CLICK WITH APPROPRIATE DATE*/
  // const [showTask, setShowTasks] = useState('No Tasks Available')
  // const handleChange = (e) => {
  //   setShowTasks 
    
  // }
//   const onClickDay = (date, tasks) => {
//     // const dayTasks = tasks.filter( task => {
//       return tasks.startDate === date  
//   // })
// };

    // console.log(date);
    // alert('Selected Date!')
    // if (date === 'date') {
    // return alert('Yes');
    // if (time === 'start') {
    //   setFormData({ ...formData, startDate: _d });
    // } else if (time === 'end') {
    //   setFormData({ ...formData, endDate: _d });
    // }
  

  return (
    <div>
        <Calendar
        onChange={date => onChange(date)}
        value={date}
        onClickDay={e => onClickDay(e)}
        />
        <button>Add Task</button>
    </div>
  )
}
