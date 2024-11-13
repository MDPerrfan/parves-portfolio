import React from 'react'
import { assets } from '../assets/assets'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
    <>
    <div>
            {/* Hero section */}
            <div className='d-lg-flex d-md-flex justify-content-center align-items-center' style={{ minHeight: "100vh", background: "rgb(253, 255, 250)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                            <p className='fw-semibold fs-1 p mt-2' style={{ color: "rgb(75, 75, 72)" }}>Hi There!</p>
                            <p className='fw-semibold fs-1 p' style={{ color: "rgb(73, 73, 72)" }}>I'm <span className='name'>Mohammed Parves</span></p>
                            <div className='fw-bold fs-2 p' style={{ color: "rgb(75, 75, 72)" }}>
                                <Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Techie', 'Teacher', 'Ecophile'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <a href="" className='btn py-2 px-1 w-50 mt-3'>Send Mail</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-5 mt-lg-0 mt-md-0">
                            <img id="main-profile" className='img-fluid w-75 mt-5 mt-lg-0 mt-md-0' src={assets.mainprofile2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Home about section */}
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: "100vh", background: "rgb(250, 250, 250)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                            <h1 className='text-center my-5 p'>LET ME <span style={{ color: "coral" }}>INTRODUCE</span> MYSELF</h1>
                            <ul className='' style={{ listStyle: "circle", fontSize: "25px" }}>
                                <li>
                                    <p className='fs-4 p2'>I'm passionate about programming, specializing in web development.</p>
                                </li>
                                <li>
                                    <p className='fs-4 p2'>I am fluent in classics like <span className='coral'>HTML, CSS, JavaScript and React.js</span> </p>
                                </li>
                                <li>
                                    <p className='fs-4 p2'>I also possess skills in <span className='coral'>C,C++</span> </p>
                                </li>
                                <li>
                                    <p className='fs-4 p2'>I'm working to develop my skilss on <span className='coral'>Node.js</span>  and <span className='coral'>Modern Javascript Library</span> and Frameworks  like <span className='coral'>React.js</span> and <span className='coral'>Next.js</span> </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                            <img id="main-profile" className='img-fluid  w-75' src={assets.aboutimage2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container my-4 d-flex flex-column justify-content-center align-items-center">
                <h1 className='p'>FIND ME ON</h1>
                <p className=''>Feel free to <span style={{ color: "coral" }}>connect</span> with me</p>
                <div className="icons">
                    <ul class="list-unstyled d-flex gap-5 justify-content-center my-4">
                        <li>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </>
        

    )
}

export default Home
