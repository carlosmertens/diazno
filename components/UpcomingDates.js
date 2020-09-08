import React, { useState } from 'react';

const dataEvents = [
  { date: '20 Dec 20', event: 'Brotfabrik Berlin' },
  { date: '20 Jan 21', event: 'The Swag' },
];

const UpcomingDates = () => {
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
    <div className='upcoming-dates'>
      <h2>Upcoming Dates</h2>
      {eventsGrid}
    </div>
  );
};

export default UpcomingDates;
