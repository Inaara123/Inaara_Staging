import React from 'react';

const TimeSlot = ({ time, color, disabled }) => {
  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-md ${
        color === 'green'
          ? 'bg-green-500 text-white'
          : color === 'mustard'
          ? 'bg-yellow-500 text-white'
          : color === 'red'
          ? 'bg-red-500 text-white'
          : 'bg-gray-500 text-white'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {time}
    </div>
  );
};

export default TimeSlot;