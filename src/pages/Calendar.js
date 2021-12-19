import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
      <h1 className='text-center'>Calendar</h1>
        <Calendar 
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  )
}

export default MyCalendar
