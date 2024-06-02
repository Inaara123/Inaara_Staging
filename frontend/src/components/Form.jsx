import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    designation: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactChange = (value) => {
    setFormData({ ...formData, contact: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.fullName || !formData.email || !formData.designation || !formData.contact) {
      toast.error('Please fill out all fields.');
      return;
    }
    try {
      const response = await axios.post('https://inaara-staging.onrender.com/users', formData);
      console.log(response.data);
      toast.success('Form submitted successfully!');
      // Clear form
      setFormData({
        fullName: '',
        email: '',
        designation: '',
        contact: ''
      });

      // Delay navigation by 5 seconds
      setTimeout(() => {
        navigate('/schedule');
      }, 5000);
      
    } catch (error) {
      console.error(error);
      toast.error('Error submitting form. Please try again later.');
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <input
              type="text"
              className="form-control shadow-sm w-full"
              placeholder="Full name"
              aria-label="Full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please enter valid Fullname.
            </div>
          </div>
          <div>
            <input
              type="email"
              className="form-control shadow-sm w-full"
              placeholder="Email address"
              aria-label="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please enter valid Email address.
            </div>
          </div>
          <div>
            <input
              type="text"
              className="form-control shadow-sm w-full"
              placeholder="Designation"
              aria-label="Occupation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please enter valid Designation.
            </div>
          </div>
          <div>
            <PhoneInput
              country={'in'}
              value={formData.contact}
              onChange={handleContactChange}
              inputClass="form-control shadow-sm w-full"
            />
            <div className="invalid-feedback">
              Please enter valid Contact details.
            </div>
          </div>
        </div>
        <button type="submit" className="bg-[#EC7F67] text-white rounded-md font-medium py-3 px-6">
          Book my Free Appointment
        </button>
      </form>
    </>
  );
}

export default Form;
