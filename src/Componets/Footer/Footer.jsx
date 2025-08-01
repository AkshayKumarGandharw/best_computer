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
            <div className="col-md-4">
              <div className="logo">
                <Navbar.Brand href="#" className='brand'>

                 <div className="">
                   <img src={'./images/bcecpl_logo.jpeg'} alt="bci_logo" className='img-fluid image-logo' width={80} height={80} />
                 <br></br> <a> Best Computer Education & Consultancy <br></br>Private Limited</a>
                 </div>
                </Navbar.Brand>
              </div>
              <div className="contact">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp; <i>8889597266, 0771-4520041</i>
                <br>
                </br>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; <i>bestcomputer002@gmail.com</i>
              </div>
            </div>

            <div className="col-md-8 d-flex">
              <div className="col-md-4">
                <u><b>MENU</b></u>
               <ul>
                <li><a href=""> {">"}&nbsp;Home</a></li>
                <li><a href="">{">"}&nbsp;Education</a></li>
                <li><a href="">{">"}&nbsp;Student</a></li>
                <li><a href="">{">"}&nbsp;Job Consultancy</a></li>
                <li><a href="">{">"}&nbsp;About Us</a></li>
                <li><a href="">{">"}&nbsp;Contact Us</a></li>
               </ul>
              </div>
              <div className="col-md-4"><u><b>COURSE</b></u>
                <ul>
                  <li><a href="">{">"}&nbsp;Basic Computer</a></li>
                  <li><a href="">{">"}&nbsp;Tally </a></li>
                  <li><a href="">{">"}&nbsp;Acc. & Tax. </a></li>
                  <li><a href="">{">"}&nbsp;Graghics Design</a></li>
                  <li><a href="">{">"}&nbsp;Website Design</a></li>
                  <li><a href="">{">"}&nbsp;Spoken English</a></li>
                  <li><a href="">{">"}&nbsp;Office Automation</a></li>
                </ul>
              </div>
              <div className="col-md-4"><u><b>DOWNLOAD</b></u>
                <ul>
                  <li><a href="">{">"}&nbsp;Syllabus</a></li>
                  <li><a href="">{">"}&nbsp;Study Material </a></li>
                  <li><a href="">{">"}&nbsp;References </a></li>
                  <li><a href="">{">"}&nbsp;Books</a></li>
                  <li><a href="">{">"}&nbsp;Notes</a></li>
                </ul>  
              </div>
            </div>
          </div>
        </div>

      </footer>
      <div className="footer d-flex">
        <div className="col-lg-6 footer-first">
          <p>&copy;2024, Best Computer & Consultancy Pvt. ltd. All rights Reserved. </p>
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