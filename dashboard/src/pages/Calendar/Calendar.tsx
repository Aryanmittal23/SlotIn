// src/components/Calendar.tsx
import React, { useState } from 'react';
import './Calendar.css';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
const hours = Array.from({ length: 24 }, (_, i) => i);

const Calendar: React.FC = () => {
  const [openHours, setOpenHours] = useState<{ [key: string]: { open: number, close: number } }>({
    Monday: { open: 9, close: 17 },
    Tuesday: { open: 9, close: 17 },
    Wednesday: { open: 9, close: 17 },
    Thursday: { open: 9, close: 17 },
    Friday: { open: 9, close: 17 },
    Saturday: { open: 9, close: 17 },
    Sunday: { open: 9, close: 17 },
  });

  const handleChange = (day: string, type: 'open' | 'close', value: number) => {
    setOpenHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  return (
    <div>
      <div className='header'>
        {daysOfWeek.map((day) => (
          <div key={day} style={{ marginBottom: '20px' }}>
            <h3>{day}</h3>
            <label>
              Open:
              <select
                value={openHours[day].open}
                onChange={(e) => handleChange(day, 'open', parseInt(e.target.value))}
              >
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}:00
                  </option>
                ))}
              </select>
            </label>
            <label>
              Close:
              <select
                value={openHours[day].close}
                onChange={(e) => handleChange(day, 'close', parseInt(e.target.value))}
              >
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}:00
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
      </div>
      <div className='data-table'>
        <div className='data-header'>
          <div className='data-row'>
            <div className='data-cell'>Day</div>
            <div className='data-cell'>Open</div>
            <div className='data-cell'>Close</div>
          </div>
        </div>
        <div className='data-body'>
          {Object.entries(openHours).map(([day, hours]) => (
            <div className='data-row' key={day}>
              <div className='data-cell'>{day}</div>
              <div className='data-cell'>{hours.open}:00</div>
              <div className='data-cell'>{hours.close}:00</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
