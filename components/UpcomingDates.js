import React, { useState } from 'react';

const UpcomingDates = () => {
  const [date, setDate] = useState('20 Dec 20');
  const [event, setEvent] = useState('Brotfabrik Berlin');
  return (
    <div className='upcoming-dates'>
      <h2>Upcoming Dates</h2>
      <div>
        <p>
          {date} - {event}
        </p>
      </div>
    </div>
  );
};

export default UpcomingDates;
