import React from 'react';
import { format } from 'date-fns';

export const Dates = ({ title, events }) => {
  return (
    <div className='upcoming-dates'>
      <h2 className='text-xl font-bold'>{title}</h2>
      {events.map((event, index) => {
        return (
          <ul className='text-left' key={index}>
            <li>
              <a target='_blank' rel='noreferrer noopener' href={event.Link}>
                {format(new Date(event.Date), 'dd MMM, yyyy')} - {event.Event}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
