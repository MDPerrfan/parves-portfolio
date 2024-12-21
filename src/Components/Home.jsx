import React from 'react'
import { assets } from '../assets/assets'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect,useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    useEffect(() => {
        // Define the IntersectionObserver
   
    }, []);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        // Select all elements with the 'hidden' class
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        // Cleanup observer on component unmount
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
            clearTimeout(timer);
        }; 
    }, []);
    return (
        <>
            <div>
                {/* Hero section */}
                <div
                    className='d-lg-flex d-md-flex justify-content-center align-items-center'
                    style={{ minHeight: '100vh', background: 'rgb(253, 255, 250)' }}
                >
                    <div className='container m-2'>
                        <div className='row'>
                            {/* Left Column */}
                            <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center'>
                                {loading ? (
                                    <>
                                        <Skeleton height={40} width={200} className="mb-2" />
                                        <Skeleton height={40} width={300} className="mb-2" />
                                        <Skeleton height={30} width={250} className="mb-4" />
                                    </>
                                ) : (
                                    <>
                                        <p className='fw-semibold fs-1 p mt-2' style={{ color: 'rgb(75, 75, 72)' }}>
                                            Hi There!
                                        </p>
                                        <p className='fw-semibold fs-1 p des' style={{ color: 'rgb(73, 73, 72)' }}>
                                            I'm <span className='name'>Mohammed Parves</span>
                                        </p>
                                        <div className='fw-bold fs-2 p des' style={{ color: 'rgb(75, 75, 72)' }}>
                                            <Typewriter
                                                options={{
                                                    strings: ['Web Developer', 'Techie', 'Teacher', 'Ecophile'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </div>
                                    </>
                                )}
                                <a href='mailto:mdperrfan@gamil.com' className='btn py-2 px-1 w-50 mt-3'>
                                    {loading ? <Skeleton width={100} height={30} /> : 'Send Mail'}
                                </a>
                            </div>

                            {/* Right Column */}
                            <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-5 mt-lg-0 mt-md-0'>
                                {loading ? (
                                    <Skeleton circle={true} height={200} width={200} />
                                ) : (
                                    <img
                                        id='main-profile'
                                        className='img-fluid w-75 mt-5 mt-lg-0 mt-md-0'
                                        src={assets.mainprofile2}
                                        alt='Profile'
                                    />
                                )}
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
                                        <p className='fs-4 p2'>I am fluent in classics like <span className='coral des'>HTML, CSS, JavaScript and React.js</span> </p>
                                    </li>
                                    <li>
                                        <p className='fs-4 p2'>I also possess skills in <span className='coral des'>C,C++</span> </p>
                                    </li>
                                    <li>
                                        <p className='fs-4 p2'>I'm working to develop my skilss on <span className='coral des'>Node.js</span>  and <span className='coral des'>Modern Javascript Library</span> and Frameworks  like <span className='coral des'>React.js</span> and <span className='coral des'>Next.js</span> </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                                <img id="main-profile"
                                    className='img-fluid  w-75' src={assets.aboutimage2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="container my-4 d-flex flex-column justify-content-center align-items-center">
                        <h1 className='p'>FIND ME ON</h1>
                        <p className=''>Feel free to <span style={{ color: "coral" }}>connect</span> with me</p>
                        <div className="icons">
                            <ul className="list-unstyled d-flex gap-5 justify-content-center my-4">
                                <li>
                                   <a href=""><FontAwesomeIcon icon={faFacebook} size="2x" style={{color:"black"}}/></a> 
                                </li>
                                <li>
                                    <a href="mailto:mdperrfan@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" style={{color:"maroon"}} /></a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </li>
                                <li>
                                    <a style={{textDecoration:"none"}} href="https://linkedin.com/in/mohammed-parves-6635212aa/"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color:"cadetblue"}}/></a>
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
