import React from 'react';
import '../Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <section id='Contact-section'>
      <h2 className='center margin-100'><span className='text-purple'><b>Best Computer Education <br></br>& Consultancy Pvt. Ltd.</b></span> <span className='text-green'><i><b>Contact</b></i></span></h2>
      <Container>
        <Row>
          <Col lg={6} md={6} id='address'>
            <div className="google-map mb-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2296109440454!2d81.6684236746205!3d21.222741681088955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd920cbfeafd%3A0x2e2ad9bdb937fa37!2sBest%20Computer%20Education%20%26%20Consultancy%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1746870514982!5m2!1sen!2sin" width="100%" height="300px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
             <div className="google-address">
              <span><FontAwesomeIcon icon={faLocationDot} className='fs-1 location rounded-circle py-2 px-2'/></span>
              <h5 className='semibold '>BEST COMPUTER EDUCATION & CONSULTANCY PVT. LTD.</h5>
              <p>1st Floor,Roshan Complex ,Amlidihi Road Raipur(Chhattishgarh)</p>
              <p className='fs-5'>Contact No.: 8889597266,Phone: 0771-4520041</p>
            </div>

          </Col>
          <Col lg={6} md={6} >
            <div className="form"> 
                 <h2 className='my-4'>Contact Us</h2>

                  <div className="my-3 mx-3">
                    <input type="text" placeholder='Enter First Name' className='form-control'/>
                  </div>
                  <div className="my-3 mx-3">
                    <input type="text" placeholder='Enter Last Name' className='form-control'/>
                  </div>
                  <div className="my-3 mx-3">
                    <input type="text" placeholder='Enter Email' className='form-control'/>
                  </div>
                  <div className="my-3 mx-3">
                    <input type="text" placeholder='Enter Contact' className='form-control'/>
                  </div>
                  <div className="my-3 mx-3">
                    <textarea col='' row='' className='form-control'>Message</textarea>
                  </div>
                 <div className="my-3">
                   <button className='btn-outline-premiry align-left' id=''>Send Message</button>
                 </div>
            </div>
            
          </Col>
        </Row>
       

      </Container>

    </section>
  )
}

export default Contact