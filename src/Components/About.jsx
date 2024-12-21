import React from 'react'
import { assets } from '../assets/assets'
import GitHubCalendar from 'react-github-calendar';
import { AiOutlineApi } from "react-icons/ai";
import { GiAk47 } from "react-icons/gi";
import { AiTwotoneRocket } from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import { DiBootstrap } from "react-icons/di";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3Full,
  DiHtml5
} from "react-icons/di";
const About = () => {
  return (
    <>
      <div className='d-lg-flex d-md-flex justify-content-center align-items-center mt-md-5' style={{ minHeight: '100vh' }}>
        <div className="container mt-md-5">
          <div className="row mx-2">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <p className='fs-1 p coral text-center fw-bold '>Be familiar with my<span className='name fw-bolder text-center'> PERSONA</span></p>
              <p className='fs-4'>Hi Everyone, I am <span className='coral fw-bolder'>Parves</span> from <span className='coral'>Chittagong, Bangladesh <br /></span>
                I am currently a CS Student.
                At <span className='coral'>Port City International University</span> </p>
              <p className='fs-4 '>Beyond coding, I find joy in various activities:!</p>
              <ul className='list-unstyled fs-5 mx-3 fw-bold text-secondary'>
                <li className="about-activity">
                  <GiAk47 /> Gaming
                </li>
                <li className="about-activity">
                  <AiOutlineApi /> Tech Exploration
                </li>
                <li className="about-activity">
                  <AiTwotoneRocket /> Traveling
                </li>
              </ul>
              <p className='fs-5'>"The best thing about a boolean is even if you are wrong, you are only off by a bit." <span className='fs-6 text-secondary'>-Anonymous</span></p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img src={assets.aboutimage} alt="" className='img-fluid w-75 ' />
            </div>
          </div>
          {/*skills card*/}
          <div>
            <p className='fs-2 fw-bold text-center text-secondary'>Developing <span className='fw-bolder fs-2 coral'>Skills in</span> </p>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="tech des" data-tooltip="HTML5">
                <DiHtml5 />
              </div>
              <div className="tech des" data-tooltip="CSS3">
                <DiCss3Full />
              </div>
              <div className="tech des" data-tooltip="Bootstrap">
                <DiBootstrap />
              </div>
              <div className="tech des" data-tooltip="Tailwind CSS">
                <SiTailwindcss />
              </div>
              <div className="tech des" data-tooltip="Firebase">
                <SiFirebase />
              </div>
              <div className="tech des" data-tooltip="C++">
                <CgCPlusPlus />
              </div>
              <div className="tech des" data-tooltip="JavaScript">
                <DiJavascript1 />
              </div>
              <div className="tech des" data-tooltip="Node.js">
                <DiNodejs />
              </div>
              <div className="tech des" data-tooltip="React">
                <DiReact />
              </div>
              <div className="tech des" data-tooltip="MongoDB">
                <DiMongodb />
              </div>
            </div>

          </div>

          {/*github calender*/}
          <div className="my-5 d-flex justify-content-center flex-column align-items-center">
            <p className="fs-2 fw-bold text-center text-secondary">Days I <span className="fw-bolder fs-3 coral des" >Code</span></p>
            <div id="github-calendar-container">
              <GitHubCalendar username="MDPerrfan" />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default About
