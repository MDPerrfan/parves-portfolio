import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Projects = () => {
  const { projectData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if(projectData){
        setLoading(false); 
      }
    }, 3000); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='d-md-flex justify-content-center align-items-center mt-md-5' style={{ minHeight: '100vh' }}>
      <div className="container">
        <p className='text-center fs-3 mt-md-5 '>
          My Recent <span className='fw-bolder fs-3 coral'>Works</span>
        </p>
        <p className='text-center'>Here are a few projects I've worked on recently.</p>
        <div className="row m-2">
          {loading
            ? // Render Skeleton Loader
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-1">
                  <div className="card">
                    <div className="card-body">
                      <Skeleton height={160} />
                      <h5 className="card-title text-center fw-bold mt-3">
                        <Skeleton width={120} />
                      </h5>
                      <p className="text-secondary mt-2">
                        <Skeleton count={2} />
                      </p>
                    </div>
                    <div className="d-flex justify-content-center gap-3 p-3">
                      <Skeleton width={80} height={30} />
                      <Skeleton width={80} height={30} />
                    </div>
                  </div>
                </div>
              ))
            : // Render Actual Project Data
              projectData.reverse().map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-1 mb-5">
                  <div className="card">
                    <div className="card-body">
                      <img className='card-img-top' src={item.image} alt={item.title} />
                      <h5 className="card-title text-center fw-bold">{item.title}</h5>
                      <p className='text-secondary'>{item.description}</p>
                    </div>
                    <div className='d-flex justify-content-center gap-3 p-3'>
                      <a className='px-4 py-2 rounded btn' href={item.githubLink}>GitHub</a>
                      <a className='px-4 py-2 rounded btn' href={item.demoLink}>Demo</a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
