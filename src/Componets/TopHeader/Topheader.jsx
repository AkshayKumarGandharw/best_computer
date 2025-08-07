import React from 'react';
import './topheader.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faMobile,faEnvelope, faBuildingCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook, faYoutube,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function Topheader() {
    return (
        <div className='Topheader'>
            <Container>
                <Row className='center'>
                    {/* <Col lg={3} className='contact'>
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp;&nbsp;<i>Call Us: 0771-4520041<br></br>
                         <FontAwesomeIcon icon={faMobile} />    
                           &nbsp;  Mobile No : +91 8889597266</i>
                    </Col>
                    <Col lg={3} className='timing' >
                        <FontAwesomeIcon icon={faClock} />
                         &nbsp;<i>Opening Time: 8:30 AM</i><br></br>
                         <FontAwesomeIcon icon={faClock} />
                         &nbsp; <i>Closing Time: 8:30 PM</i>&nbsp;
                    </Col>
                    <Col lg={3} className='address'>
                        <FontAwesomeIcon icon={faHome} />
                         &nbsp;<i>Address: 1st Floor, Roshan Complex, Amlidihi Road, Raipur(Chhattisgarth)</i>
                    </Col> 
                    
                    <Col  lg={3} className='social-icons d-flex'>
                            <Col lg={2} className='proprety_box' id='whatsapp'>
                             <span>
                                <FontAwesomeIcon icon={faWhatsapp} className='fs-5'/>
                             </span>
                            </Col>
                            <Col lg={2} className='proprety_box' id='Instragram'>
                            <span><FontAwesomeIcon icon={faInstagram} className='fs-5'/></span>
                            </Col>
                            <Col lg={2} className='proprety_box' id='facebook'>
                                 <span><FontAwesomeIcon icon={faFacebook} className='fs-5'/></span>
                            
                            </Col>
                            <Col lg={2} className='proprety_box' id='twitter'>
                            <span><FontAwesomeIcon icon={faTwitter} className='fs-5'/></span>
                            </Col>
                            <Col lg={2} className='proprety_box' id='youtube'>
                            <span><FontAwesomeIcon icon={faYoutube} className='fs-5'/></span>
                            </Col>
                            <Col lg={2} className='proprety_box' id='envelope'>
                            
                            <span><FontAwesomeIcon icon={faEnvelope} className='fs-5'/></span>
                            </Col>

                    </Col>*/}
                    <Col lg={6}>
                        <div className="head d-flex">
                            <h3>BEST COMPUTER & CONSULTANCY </h3><p className='my-3'><span style={{color:'yellow'}}>PRIVATE</span>&nbsp;<span style={{color:'red'}}>LIMITED</span></p>
                            
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='time'>
                            <FontAwesomeIcon icon={faClock} />
                         &nbsp;Open : 8:30 AM&nbsp;&nbsp;|
                         &nbsp; Close : 8:30 PM&nbsp;
                        </div>
                        <div className='day'>
                           <FontAwesomeIcon icon={faBuildingCircleArrowRight} />
                             &nbsp;Mon - to - Sat &nbsp;&nbsp;|
                             &nbsp; Close : Sun &nbsp;
                    
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Topheader