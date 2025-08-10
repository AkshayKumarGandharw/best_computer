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
                    
                    <Col >
                        <div className="head">
                            <p>BEST COMPUTER & CONSULTANCY <span style={{color:'yellow'}}>PRIVATE</span>&nbsp;<span style={{color:'red'}}>LIMITED</span></p><p className='my-3'></p>
                            
                        </div>
                    </Col>
                    <Col >
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