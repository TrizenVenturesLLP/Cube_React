import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles
import './Face4.css'; // Custom styles for the face

const Face4 = () => {
  const [date, setDate] = useState(new Date()); // State for selected date

  return (
    <div className="face4-container">
      <Calendar
        onChange={setDate}
        value={date}
        className="calendar"
      />
      <div className="face-number">Face 4</div>
    </div>
  );
};

export default Face4;
