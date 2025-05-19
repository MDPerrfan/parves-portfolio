import React from 'react'
import { assets } from '../assets/assets'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <>
            <div>
                {/* Hero section */}
                <motion.div
                    className='d-lg-flex d-md-flex justify-content-center align-items-center'
                    style={{ minHeight: '100vh', background: 'rgb(253, 255, 250)' }}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className='container m-2'>
                        <div className='row'>
                            {/* Left Column */}
                            <motion.div 
                                className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center'
                                variants={itemVariants}
                            >
                                {loading ? (
                                    <>
                                        <Skeleton height={40} width={200} className="mb-2" />
                                        <Skeleton height={40} width={300} className="mb-2" />
                                        <Skeleton height={30} width={250} className="mb-4" />
                                    </>
                                ) : (
                                    <>
                                        <motion.p 
                                            className='fw-semibold fs-1 p mt-2' 
                                            style={{ color: 'rgb(75, 75, 72)' }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Hi There!
                                        </motion.p>
                                        <motion.p 
                                            className='fw-semibold fs-1 p des' 
                                            style={{ color: 'rgb(73, 73, 72)' }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            I'm <span className='name'>Mohammed Parves</span>
                                        </motion.p>
                                        <motion.div 
                                            className='fw-bold fs-2 p des' 
                                            style={{ color: 'rgb(75, 75, 72)' }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Typewriter
                                                options={{
                                                    strings: ['Web Developer', 'Techie', 'Teacher', 'Ecophile'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </motion.div>
                                    </>
                                )}
                                <motion.a 
                                    href='mailto:mdperrfan@gamil.com' 
                                    className='btn py-2 px-1 w-50 mt-3'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {loading ? <Skeleton width={100} height={30} /> : 'Send Mail'}
                                </motion.a>
                            </motion.div>

                            {/* Right Column */}
                            <motion.div 
                                className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-5 mt-lg-0 mt-md-0'
                                variants={imageVariants}
                            >
                                {loading ? (
                                    <Skeleton circle={true} height={200} width={200} />
                                ) : (
                                    <motion.img
                                        id='main-profile'
                                        className='img-fluid w-75 mt-5 mt-lg-0 mt-md-0 rounded-circle'
                                        src='https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747668948/aboutprofile_q2sjqf.jpg'
                                        alt='Profile'
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Home about section */}
                <motion.div 
                    className='d-flex flex-column justify-content-center align-items-center' 
                    style={{ minHeight: "100vh", background: "rgb(250, 250, 250)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container">
                        <div className="row">
                            <motion.div 
                                className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className='text-center my-5 p'>LET ME <span style={{ color: "coral" }}>INTRODUCE</span> MYSELF</h1>
                                <ul className='' style={{ listStyle: "circle", fontSize: "25px" }}>
                                    {[
                                        "I'm passionate about programming, specializing in web development.",
                                        "I am fluent in classics like HTML, CSS, JavaScript and React.js",
                                        "I also possess skills in C,C++",
                                        "I'm working to develop my skilss on Node.js and Modern Javascript Library and Frameworks like React.js and Next.js"
                                    ].map((text, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                        >
                                            <p className='fs-4 p2'>{text}</p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div 
                                className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.img 
                                    id="main-profile"
                                    className='img-fluid w-50 rounded-circle' 
                                    src='https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747669049/Profile_main_yz2dau.jpg' 
                                    alt=""
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div 
                        className="container my-4 d-flex flex-column justify-content-center align-items-center"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className='p'>FIND ME ON</h1>
                        <p className=''>Feel free to <span style={{ color: "coral" }}>connect</span> with me</p>
                        <div className="icons">
                            <ul className="list-unstyled d-flex gap-5 justify-content-center my-4">
                                {[
                                    { icon: faFacebook, color: "black", href: "" },
                                    { icon: faEnvelope, color: "maroon", href: "mailto:mdperrfan@gmail.com" },
                                    { icon: faTwitter, color: "black", href: "" },
                                    { icon: faLinkedin, color: "cadetblue", href: "https://linkedin.com/in/mohammed-parves-6635212aa/" }
                                ].map((social, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <a href={social.href} style={{ textDecoration: "none" }}>
                                            <FontAwesomeIcon 
                                                icon={social.icon} 
                                                size="2x" 
                                                style={{ color: social.color }}
                                            />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Home
