import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <>
      <div className="container mt-md-5 d-lg-flex d-md-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
        <p className="fw-bold fs-1 coral text-center">Get in Touch</p>
        <p id="heading" className=" fs-4 text-center">Contact me</p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <form action="" className="my-3 mx-2" style={{ minWidth: '80%' }}>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="firstName">First name</label><br />
                    <input className="w-100" type="text" id="firstName" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="lastName">Last name</label><br />
                    <input type="text" id="lastName" className="w-100" />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" className="w-100" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="phone">Phone number</label><br />
                    <input type="number" id="phone" className="w-100" />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="topic">Choose a topic</label><br />
                  <select name="topic" id="topic" className="w-100">
                    <option value="">Frontend</option>
                    <option value="two">Backend</option>
                    <option value="two">Full Stack</option>
                  </select>
                </div>

                <div className="mt-3">
                  <label htmlFor="message">Message</label><br />
                  <textarea name="message" id="message" className="w-100" placeholder="Type your message..."></textarea>
                </div>

                <div className="d-flex align-items-center mt-3">
                  <input type="checkbox" id="terms" className="me-2 checkbox" />
                  <label htmlFor="terms" className="mb-0">I accept the terms</label>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className=" px-4 py-2 mb-5 border-0">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <img className='img-fluid w-75 des' src={assets.contact} alt="" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
