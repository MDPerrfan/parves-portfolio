import React from 'react'
import { assets } from '../assets/assets'

const Projects = () => {
  return (
    <div className='d-md-flex justify-content-center align-items-center mt-md-5' style={{ minHeight: "100vh" }}>
      <div className="container">
        <p className='text-center fs-3 mt-md-5 '>My Recent <span className='fw-bolder fs-3 coral'>Works</span></p>
        <p className='text-center'>Here are a few projects I've worked on recently.</p>
        <div className="row m-2">
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <div className="card-body">
                <img className='card-img-top' src={assets.pchat} alt="" />
                <h5 class="card-title text-center fw-bold">P-Chatt</h5>
                <p className='text-secondary'>Our chat app, built using the MERN stack, provides a seamless messaging experience with Firebase authentication. Users can sign up with their email and engage in real-time chats. The app supports media sharing, allowing users to easily exchange photos, videos, and other files within their conversations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <div className="card-body">
                <img className='card-img-top' src={assets.pchat} alt="" />
                <h5 class="card-title text-center fw-bold">P-Chatt</h5>

                <p>Our chat app, built using the MERN stack, provides a seamless messaging experience with Firebase authentication. Users can sign up with their email and engage in real-time chats. The app supports media sharing, allowing users to easily exchange photos, videos, and other files within their conversations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <div className="card-body">
                <img className='card-img-top' src={assets.pchat} alt="" />
                <h5 class="card-title text-center fw-bold">P-Chatt</h5>

                <p>Our chat app, built using the MERN stack, provides a seamless messaging experience with Firebase authentication. Users can sign up with their email and engage in real-time chats. The app supports media sharing, allowing users to easily exchange photos, videos, and other files within their conversations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <div className="card-body">
                <img className='card-img-top' src={assets.pchat} alt="" />
                <h5 class="card-title text-center fw-bold">P-Chatt</h5>

                <p>Our chat app, built using the MERN stack, provides a seamless messaging experience with Firebase authentication. Users can sign up with their email and engage in real-time chats. The app supports media sharing, allowing users to easily exchange photos, videos, and other files within their conversations.</p>
              </div>
            </div>
          </div>
             <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <div className="card-body">
                <img className='card-img-top' src={assets.pchat} alt="" />
                <h5 class="card-title text-center fw-bold">P-Chatt</h5>

                <p>Our chat app, built using the MERN stack, provides a seamless messaging experience with Firebase authentication. Users can sign up with their email and engage in real-time chats. The app supports media sharing, allowing users to easily exchange photos, videos, and other files within their conversations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
