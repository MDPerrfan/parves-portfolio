import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading (replace with actual data fetch logic)
        setTimeout(() => setLoading(false), 3000); // Adjust time as needed
    }, []);

    return (
        <div className='d-flex justify-content-center align-items-center mt-5' style={{ minHeight: "100vh" }}>
            <div className="container mt-lg-5 mt-md-5">
                <p className='fw-bolder fs-3 text-center'>
                    My <span className='coral fs-3'>Achievements</span> and <span className='coral fs-3'>Certificates</span>
                </p>
                <div className="row mb-4">
                    {loading
                        ? // Render Skeleton Loader
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="col-lg-6 col-md-6 col-sm-12 my-1">
                                <div className="card">
                                    <div className="card-body">
                                        <Skeleton height={160} />
                                        <h5 className="card-title text-center fw-bold mt-3">
                                            <Skeleton />
                                        </h5>
                                        <p className="text-secondary mt-2 text-center">
                                            <Skeleton width={120}/>
                                        </p>
                                    </div>
                                    <div className="mx-2">
                                        <Skeleton width={120} />
                                    </div>
                                </div>
                            </div>
                        ))
                        : // Render Actual Project Data
                        <>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src={assets.js} alt="JavaScript(Basic) certificate" />
                                        <h5 className="card-title text-center fw-bold">JavaScript(Basic)</h5>
                                        <p className='text-center text-success'>HackerRank</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.hackerrank.com/certificates/a69349610720" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src={assets.js2} alt="JavaScript(Intermediate) certificate" />
                                        <h5 className="card-title text-center fw-bold">JavaScript(Intermediate)</h5>
                                        <p className='text-center text-success'>HackerRank</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.hackerrank.com/certificates/d075aedab4a5" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src={assets.ps1} alt="Problem Solving(Basic) certificate" />
                                        <h5 className="card-title text-center fw-bold">Problem Solving(Basic)</h5>
                                        <p className='text-center text-success'>HackerRank</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.hackerrank.com/certificates/2aff477c5c21" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src={assets.frontReact} alt="Frontend Developer(React) certificate" />
                                        <h5 className="card-title text-center fw-bold">Frontend Developer(React)</h5>
                                        <p className='text-center text-success'>HackerRank</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.hackerrank.com/certificates/c17e2990916b" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6TXWMJN94UKS/CERTIFICATE_LANDING_PAGE~6TXWMJN94UKS.jpeg" alt="React(Basic) certificate" />
                                        <h5 className="card-title text-center fw-bold">React(Basic)</h5>
                                        <p className='text-primary text-center'>Meta</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.coursera.org/account/accomplishments/records/6TXWMJN94UKS" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DT2K3J8Q273F/CERTIFICATE_LANDING_PAGE~DT2K3J8Q273F.jpeg" alt="HTML and CSS in Depth certificate" />
                                        <h5 className="card-title text-center fw-bold">HTML and CSS in Depth</h5>
                                        <p className='text-primary text-center'>Meta</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.coursera.org/account/accomplishments/records/DT2K3J8Q273F" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N7FRBLQRJUR9/CERTIFICATE_LANDING_PAGE~N7FRBLQRJUR9.jpeg" alt="Version Control certificate" />
                                        <h5 className="card-title text-center fw-bold">Version Control</h5>
                                        <p className='text-primary text-center'>Meta</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.coursera.org/account/accomplishments/records/N7FRBLQRJUR9" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img className='card-img-top' src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BBFMMJALVW9L/CERTIFICATE_LANDING_PAGE~BBFMMJALVW9L.jpeg" alt="Programming with JavaScript certificate" />
                                        <h5 className="card-title text-center fw-bold">Programming with JavaScript</h5>
                                        <p className='text-primary text-center'>Meta</p>
                                        <a className='text-secondary text-decoration-none' href="https://www.coursera.org/account/accomplishments/records/BBFMMJALVW9L" style={{ fontSize: "small", }}>
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Skills;
