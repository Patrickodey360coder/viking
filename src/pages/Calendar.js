import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <h1 className='text-center'>Calendar</h1>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </>
  )
}

export default MyCalendar
