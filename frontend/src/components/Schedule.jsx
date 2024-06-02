import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/appointments', {
        fullName,
        contact,
        date: date.toISOString(), // Convert date to ISO string
        time,
        notes,
      });
      toast.success('Appointment booked successfully!');
      // Reset form
      setFullName('');
      setContact('');
      setTime('');
      setNotes('');
      setDate(new Date());
    } catch (err) {
      console.error(err);
      toast.error('Error booking appointment');
    }
  };

  const timeSlots = Array.from({ length: 11 }, (_, i) => {
    const hour = i + 10;
    const startTime = `${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    const endTime = `${hour + 1}:00 ${hour < 11 ? 'AM' : 'PM'}`;
    return { startTime, endTime };
  });

  const isDateDisabled = ({ date, view }) => {
    if (view === 'month') {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      return (
        date < now || // Disable past dates
        date.getDay() === 0 // Disable Sundays
      );
    }
    return false;
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-r from-gray-50 to-pink-50 shadow-md rounded-lg p-4 md:p-8 md:flex">
        <div className="w-full md:w-1/2 p-4">
          <Calendar
            className="mx-auto rounded-sm mt-[10px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition-all duration-300 hover:scale-110"
            value={date}
            onChange={setDate}
            minDate={new Date()} // Set minimum date to today
            tileDisabled={isDateDisabled}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block font-bold mb-2">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time-slot" className="block font-bold mb-2">
                Time Slot
              </label>
              <div className="flex flex-wrap ">
                {timeSlots.map(({ startTime, endTime }) => (
                  <div key={startTime} className="w-1/3 p-2 md:w-1/4">
                    <button
                      type="button"
                      onClick={() => setTime(`${startTime} - ${endTime}`)}
                      className={`w-full border border-gray-400 p-2 rounded transition-colors duration-300 ${
                        time === `${startTime} - ${endTime}`
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-800 hover:bg-blue-100'
                      }`}
                    >
                      {startTime} - {endTime}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="notes" className="block font-bold mb-2">
                Notes
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
