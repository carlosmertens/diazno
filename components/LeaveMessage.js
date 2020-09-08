import React, { useState } from 'react';

const LeaveMessage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(message);
      setMessage('');
    }
  };

  return (
    <div>
      <h3>LEAVE A REPLY</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className='form-message'
          type='submit'
          placeholder='Leave a nice message!!'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </form>
    </div>
  );
};

export default LeaveMessage;
