 import React from 'react';
 import '../Home.css';
 import {Container,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faGlobeAsia, faLocationCrosshairs, faPenToSquare, faPhoneFlip, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
 
 function Status() {
   return (
     <section id='Status-section'>
        <h2 className='center margin-100'><span className='text-purple'><b>Best Computer Education <br></br>& Consultancy Pvt. Ltd.</b></span> <span className='text-green'><i><b>Status</b></i></span></h2>
        <Container>
            <Row>

                <Col lg={3}>
                    <div className="status-box">
                      <span><FontAwesomeIcon icon={faDownload} className='fs-1'/></span>
                      <h3>Download</h3>
                      <h2>450</h2>
                    </div>
                </Col>

                 <Col lg={3}>
                    <div className="status-box">
                      <span><FontAwesomeIcon icon={faPenToSquare} className='fs-1'/></span>
                      <h3>Online Joined Student</h3>
                      <h2>450</h2>
                    </div>
                </Col>

                 <Col lg={3}>
                    <div className="status-box">
                      <span><FontAwesomeIcon icon={faStarHalfStroke} className='fs-1'/></span>
                      <h3>Students & Peoples Likes</h3>
                      <h2>450</h2>
                    </div>
                </Col>

                 <Col lg={3}>
                    <div className="status-box">
                      <span><FontAwesomeIcon icon={faLocationCrosshairs} className='fs-1'/></span>
                      <h3>Over All Cities</h3>
                      <h2>450</h2>
                    </div>
                </Col>
                
                
            </Row>
        </Container>
     </section>
   )
 }
 
 export default Status