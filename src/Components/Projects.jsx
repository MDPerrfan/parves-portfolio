import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const { projectData, loading } = useContext(AppContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // You can adjust this breakpoint as needed, based on Bootstrap's 'md' breakpoint
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Slightly reduced stagger for a snappier feel
      }
    }
  };

  const getCardVariants = (index) => ({
    hidden: {
      opacity: 0,
      // On small screens, always come from bottom
      y: 50,
      // On larger screens, alternate x-axis movement
      x: isSmallScreen ? 0 : (index % 2 === 0 ? -50 : 50)
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1 // Keep the individual card delay
      }
    }
  });

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className='d-md-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.p
          className='text-center fs-3 mt-md-5'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Recent <span className=' fw-bolder fs-3 coral'>Works</span>
        </motion.p>
        <motion.p
          className='text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are a few projects I've worked on recently.
        </motion.p>
        <div className="row m-2">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="col-lg-4 col-md-6 col-sm-12 my-1"
                  variants={getCardVariants(index)}
                >
                  <div className="card h-100">
                    <div className="card-body">
                      <Skeleton height={160} baseColor="#0e0e2e" highlightColor="#25257a" />
                      <h5 className="card-title text-center fw-bold mt-3">
                        <Skeleton width={120} baseColor="#0e0e2e" highlightColor="#192030" />
                      </h5>
                      <p className="text-secondary mt-2">
                        <Skeleton count={3} baseColor="#0e0e2e" highlightColor="#192030" />
                      </p>
                    </div>
                    <div className="d-flex justify-content-center gap-3 p-3">
                      <Skeleton width={80} height={30} baseColor="#0e0e2e" highlightColor="#fd652e" />
                      <Skeleton width={80} height={30} baseColor="#0e0e2e" highlightColor="#fd652e" />
                    </div>
                  </div>
                </motion.div>
              ))
            : projectData.reverse().map((item, index) => (
                <motion.div
                  key={index}
                  className="col-lg-4 col-md-6 col-sm-12 my-1 mb-5"
                  variants={getCardVariants(index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
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
                        src={item.image}
                        alt={item.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <motion.h5
                        className="card-title text-white text-center  mt-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {item.title}
                      </motion.h5>
                      <motion.div
                        className='text-white-50 flex-grow-1'
                        style={{
                          maxHeight: '120px',
                          overflowY: 'auto',
                          scrollbar: 'hidden'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <p>{item.description}</p>
                      </motion.div>
                    </motion.div>
                    <div className='d-flex justify-content-center gap-3 p-3 mt-auto'>
                      <motion.a
                        className='px-4 py-2 rounded btn'
                        href={item.githubLink}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        GitHub
                      </motion.a>
                      <motion.a
                        className='px-4 py-2 rounded btn'
                        href={item.demoLink}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Demo
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;