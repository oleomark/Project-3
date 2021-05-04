import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
        <Calendar
        onChange={onChange}
        value={value}
        />
        {console.log(value)}
        {value.toString()}
    </div>
  )
}
