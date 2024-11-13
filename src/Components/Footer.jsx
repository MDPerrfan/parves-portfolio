import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
let date = new Date();
let year = date.getFullYear();
const Footer = () => {
  return (
    <>
    <div className="d-flex flex-lg-row flex-md-row flex-sm-column  justify-content-between align-items-center" style={{background:"rgb(40, 40, 41)",minHeight:"70px"}}>
    <p className="mx-2  text-white">Designed and Developed by <span style={{color:"coral"}}>Parves</span></p>
          <p className=" text-white">Copyright © {year}</p>
          <ul className="d-flex gap-4 me-5" style={{listStyle:"none"}}>
            <li className="social-icons">
              <a
                  href="https://github.com/MDPerrfan"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.facebook.com/mdparves.erfan.3/"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/mohammed-parves-6635212aa"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.instagram.com/errfan51?igsh=MXVhZWlwZjQ4NXVteA=="
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
    </div>
    </>
  )
}

export default Footer
