import React, { useState } from 'react';

const PreviousDates = () => {
  const [date, setDate] = useState('20 Dec 19');
  const [event, setEvent] = useState('Christmas Special @ Y Not');

  return (
    <div className='previous-dates'>
      <h2>Previous dates</h2>
      <div>
        <p>
          {date} - {event}
        </p>
      </div>
    </div>
  );
};

export default PreviousDates;
