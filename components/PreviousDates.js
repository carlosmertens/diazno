import React, { useState } from 'react';

const dataEvents = [
  { date: '20 May 20', event: 'Brotfabrik Berlin' },
  { date: '20 Jul 20', event: 'The Swag' },
];

const PreviousDates = () => {
  const [events, setEvents] = useState(dataEvents);

  const eventsGrid = events.map((event, index) => {
    return (
      <div key={index}>
        <p>
          {event.date} - {event.event}
        </p>
      </div>
    );
  });

  return (
    <div className='previous-dates'>
      <h2>Previous dates</h2>
      {eventsGrid}
    </div>
  );
};

export default PreviousDates;
