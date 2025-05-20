import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Skills = () => {
    const [loading, setLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = 8; // Total number of certificate images

    const certificates = [
        {
            image: 'https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747669493/JS_ju5fk5.jpg',
            title: "JavaScript(Basic)",
            platform: "HackerRank",
            link: "https://www.hackerrank.com/certificates/a69349610720",
            color: "text-success"
        },
        {
            image: 'https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747669494/JS2_zlpkim.jpg',
            title: "JavaScript(Intermediate)",
            platform: "HackerRank",
            link: "https://www.hackerrank.com/certificates/d075aedab4a5",
            color: "text-success"
        },
        {
            image: 'https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747669494/ps1_vszkro.jpg',
            title: "Problem Solving(Basic)",
            platform: "HackerRank",
            link: "https://www.hackerrank.com/certificates/2aff477c5c21",
            color: "text-success"
        },
        {
            image: 'https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747669492/FrontReact_iepksn.jpg',
            title: "Frontend Developer(React)",
            platform: "HackerRank",
            link: "https://www.hackerrank.com/certificates/c17e2990916b",
            color: "text-success"
        },
        {
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6TXWMJN94UKS/CERTIFICATE_LANDING_PAGE~6TXWMJN94UKS.jpeg",
            title: "React(Basic)",
            platform: "Meta",
            link: "https://www.coursera.org/account/accomplishments/records/6TXWMJN94UKS",
            color: "text-primary"
        },
        {
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DT2K3J8Q273F/CERTIFICATE_LANDING_PAGE~DT2K3J8Q273F.jpeg",
            title: "HTML and CSS in Depth",
            platform: "Meta",
            link: "https://www.coursera.org/account/accomplishments/records/DT2K3J8Q273F",
            color: "text-primary"
        },
        {
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N7FRBLQRJUR9/CERTIFICATE_LANDING_PAGE~N7FRBLQRJUR9.jpeg",
            title: "Version Control",
            platform: "Meta",
            link: "https://www.coursera.org/account/accomplishments/records/N7FRBLQRJUR9",
            color: "text-primary"
        },
        {
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BBFMMJALVW9L/CERTIFICATE_LANDING_PAGE~BBFMMJALVW9L.jpeg",
            title: "Programming with JavaScript",
            platform: "Meta",
            link: "https://www.coursera.org/account/accomplishments/records/BBFMMJALVW9L",
            color: "text-primary"
        }
    ];

    useEffect(() => {
        // Preload all images
        certificates.forEach(certificate => {
            const img = new Image();
            img.src = certificate.image;
            img.onload = () => {
                setImagesLoaded(prev => {
                    const newCount = prev + 1;
                    if (newCount === totalImages) {
                        setLoading(false);
                    }
                    return newCount;
                });
            };
            img.onerror = () => {
                setImagesLoaded(prev => {
                    const newCount = prev + 1;
                    if (newCount === totalImages) {
                        setLoading(false);
                    }
                    return newCount;
                });
            };
        });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        hover: {
            x: 5,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <motion.div 
            className='d-flex justify-content-center align-items-center mt-5' 
            style={{ minHeight: "100vh" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container mt-lg-5 mt-md-5">
                <motion.p 
                    className='fw-bolder fs-3 text-center'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My <span className='coral fs-3'>Achievements</span> and <span className='coral fs-3'>Certificates</span>
                </motion.p>
                <div className="row mb-4">
                    {loading
                        ? Array.from({ length: totalImages }).map((_, index) => (
                            <motion.div 
                                key={index} 
                                className="col-lg-4 col-md-6 col-sm-12 my-1"
                                variants={cardVariants}
                            >
                                <div className="card h-100">
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
                            </motion.div>
                        ))
                        : certificates.map((certificate, index) => (
                            <motion.div 
                                key={index} 
                                className="col-lg-4 col-md-6 col-sm-12 my-2"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="card h-100"
                                    whileHover={{ 
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div 
                                        className="card-body d-flex flex-column"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.img 
                                            className='card-img-top' 
                                            src={certificate.image} 
                                            alt={`${certificate.title} certificate`}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ 
                                                height: '200px', 
                                                objectFit: 'contain',
                                                padding: '10px',
                                                backgroundColor: '#f8f9fa'
                                            }}
                                        />
                                        <motion.h5 
                                            className="card-title text-center fw-bold mt-3"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            {certificate.title}
                                        </motion.h5>
                                        <motion.p 
                                            className={`text-center ${certificate.color} mt-2`}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                        >
                                            {certificate.platform}
                                        </motion.p>
                                        <motion.a 
                                            className='text-secondary text-decoration-none d-inline-block mt-auto' 
                                            href={certificate.link} 
                                            style={{ fontSize: "small" }}
                                            variants={linkVariants}
                                            whileHover="hover"
                                        >
                                            Show credential <FontAwesomeIcon icon={faArrowRight} />
                                        </motion.a>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;
