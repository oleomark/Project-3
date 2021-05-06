import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function MyCalendar({ tasks, date, setDate }) {

  const onChange = date => {
    setDate(date);
    // console.log("Hello")
    // console.log(date)
  };
  const onClickDay = (date) => {
    alert (date)
    console.log("tileClassName")
  };
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
        onClickDay={date => onClickDay(date)}
        />
        <button>Add Task</button>
    </div>
  )
}
