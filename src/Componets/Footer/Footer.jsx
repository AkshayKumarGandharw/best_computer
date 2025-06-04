import React from 'react';
import '../../App.css';
import bootstrap from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <footer id='footer-section'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="logo">
                <Navbar.Brand href="#">

                  <img src={'./images/bcecpl_logo.jpeg'} alt="bci_logo" className='img-fluid image-logo' width={80} height={80} />
                  <a> BEST COMPUTER EDUCATION & CONSULTANCY PVT. LIT.</a>
                </Navbar.Brand>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum doloribus distinctio fugiat explicabo placeat at sapiente nemo id animi.</p>
              <div className="contact">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp; <b><i>8889597266, 0771-4520041</i></b>
                <br>
                </br>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; <b><i>bestcomputer002@gmail.com</i></b>
              </div>



            </div>
            <div className="col-md-6 d-flex">
              <div className="col-md-4">
                Company
               <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Student</a></li>
                <li><a href="">Job Consultancy</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
               </ul>
              </div>
              <div className="col-md-4">Course
                <ul>
                  <li><a href="">Basic Computer</a></li>
                  <li><a href="">Tally </a></li>
                  <li><a href="">Acc. & Tax. </a></li>
                  <li><a href="">Graghics Design</a></li>
                  <li><a href="">Website Design</a></li>
                  <li><a href="">Spoken English</a></li>
                  <li><a href="">Office Automation</a></li>
                </ul>
              </div>
              <div className="col-md-4">Study Material</div>
            </div>
          </div>
        </div>

      </footer>
      <div className="footer d-flex">
        <div className="col-lg-6 footer-first">
          <p>@copyrightbestcomputerinstitute pvt. lit.</p>
        </div>
        <div className="col-lg-6 footer-second">
          <span><a href=""><FontAwesomeIcon icon={faFacebook} className='fs-4'/></a></span>
          <span><a href=""><FontAwesomeIcon icon={faWhatsapp} className='fs-4'/></a></span>
          <span><a href=""><FontAwesomeIcon icon={faInstagram} className='fs-4'/></a></span>
          <span><a href=""><FontAwesomeIcon icon={faTwitter} className='fs-4'/></a></span>
          <span><a href=""><FontAwesomeIcon icon={faYoutube} className='fs-4'/></a></span>
        </div>
      </div>

    </>
  )
}

export default Footer