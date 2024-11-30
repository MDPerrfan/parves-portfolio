import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Assuming you are using react-toastify
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Contact = () => {
  const {backendUrl}=useContext(AppContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      toast.error('You must accept the terms!');
      return;
    }

    try {
      const response = await axios.post(backendUrl+'/api/portfolio/send-message', formData);
      if (response.data.success) {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          topic: '',
          message: '',
          termsAccepted: false,
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send the message.');
    }
  };

  return (
    <div className="container mt-md-5 d-lg-flex d-md-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
      <p className="fw-bold fs-1 coral text-center">Get in Touch</p>
      <p id="heading" className=" fs-4 text-center">Contact me</p>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="my-3 mx-2" style={{ minWidth: '80%' }}>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="firstName">First name</label><br />
                  <input
                    className="w-100"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="lastName">Last name</label><br />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-100"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <label htmlFor="email">Email</label><br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-100"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="phone">Phone number</label><br />
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-100"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="topic">Choose a topic</label><br />
                <select
                  name="topic"
                  id="topic"
                  className="w-100"
                  value={formData.topic}
                  onChange={handleChange}
                >
                  <option value="">Select a topic</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="fullstack">Full Stack</option>
                </select>
              </div>

              <div className="mt-3">
                <label htmlFor="message">Message</label><br />
                <textarea
                  name="message"
                  id="message"
                  className="w-100"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="d-flex align-items-center mt-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  className="me-2 checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <label htmlFor="terms" className="mb-0">I accept the terms</label>
              </div>

              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="px-4 py-2 mb-5 border-0 btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img className="img-fluid w-75 des" src={assets.contact} alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
