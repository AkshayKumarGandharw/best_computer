import React, { useState } from 'react';
import { Container, Row, Col, Modal, Form } from 'react-bootstrap';
import Course_Form from './Course_Form';
import '../../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faIndianRupeeSign, faTimeline } from '@fortawesome/free-solid-svg-icons';


function Course_Frame({props}) {
  // let [bool, setBool] = useState(false);
  // let [syllabus, setSyllabus] = useState(false);
  return (
    <>
      <section className='course-frame'>
        <Container fluid>
          <Row>
            <Col lg={8}>
              <h2>{props.titleOne}</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.</p>
              <p>Duration:</p>
              <p>Fee:</p>

              <h2>Syllabus</h2>
              <ul>
                <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam.</a></li>
                <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam.</a></li>
                <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam.</a></li>
                <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam.</a></li>
                <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam.</a></li>
                <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam.</a></li>
                <li><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam.</a></li>

              </ul>
              <h2>Book Now </h2>
              <div className="form-reg-here" >

                <Course_Form />
              </div>
              <h2>Experience Teachers </h2>
              <div className="experince-teachers">
                <div className="rectangle-box">
                  <div className="img-circle">
                    <img src="" alt="" />
                  </div>
                  <div className="profile-teacher">
                    <p>TEACHER FULL NAME</p>
                    <p>Subject Name</p>
                    <p>Years of Experience</p>
                  </div>
                </div>
                <div className="rectangle-box">
                  <div className="img-circle">
                    <img src="" alt="" />
                  </div>
                  <div className="profile-teacher">
                    <p>TEACHER FULL NAME</p>
                    <p>Subject Name</p>
                    <p>Years of Experience</p>
                  </div>
                </div>

              </div>

            </Col>
            <Col lg={4} style={{ background: ' #f5eeeeff' }}>
              <div className="box-3">
                <div className='course-tag'>
                  <h3 className='center '>COURSE</h3>
                </div>
                <div className="img">
                  <img src={'./images/tally_taxation.jpg'} alt="" className='img-fluid width-less-100' />
                </div>
                <div className="course-detail">
                  <div className="row course-row">
                    <div className="col d-flex py-3">
                      <div className="icon-background"><FontAwesomeIcon icon={faBookOpenReader} className='' /></div>
                      <div className="ms-2 "><h3 className='h3'><b>ACCOUNTING & TAXATION </b></h3></div>
                    </div>
                  </div>
                  <div className="row course-row">
                    <div className="col d-flex">
                      <div className="icon-background"><FontAwesomeIcon icon={faTimeline} /></div>
                      <div className="col"><p><b>&nbsp;3 Months </b></p></div>
                    </div>
                  </div>
                  <div className="row course-row">
                    <div className="col d-flex">
                      <div className="icon-background"> <FontAwesomeIcon icon={faIndianRupeeSign} /></div>
                      <div className="col"><p><b> &nbsp;15000/- </b></p></div>
                    </div>
                  </div>
                  {/* <div className="row course-row">
                                                                    <div className="col d-flex">
                                                                        <div className='center btn'>
                                                                    <button className='btn-outline-white' onClick={() => { setBool(true) }}>REGISTER NOW</button>
                
                                                                    <Modal show={bool} onHide={() => { setBool(false) }}>
                                                                        <Modal.Header closeButton>
                
                                                                            <h3>Registration Form</h3>
                
                                                                        </Modal.Header>
                                                                        <Modal.Body>
                                                                            <Form>
                                                                                <Form.Group>
                                                                                    <Form.Label>Name:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        placeholder=" Enter Your Name"
                                                                                    />
                
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Email-Id:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="email"
                                                                                        placeholder=" Enter Your Email-Id"
                                                                                    />
                
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Contact No.:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="number"
                                                                                        placeholder=" Enter Your Contact No."
                                                                                    />
                
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Address:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        placeholder=" Enter Your Name"
                                                                                    />
                
                                                                                </Form.Group>
                                                                            </Form>
                                                                        </Modal.Body>
                                                                        <Modal.Footer>
                                                                            <button className='btn-outline-danger'  >Close</button>
                                                                        </Modal.Footer>
                
                                                                    </Modal>
                                                                        </div>
                                                                        <div className='center btn'>
                                                                    <button className='btn-outline-accent margin-left' onClick={() => { setSyllabus(true) }}>VIEW SYLLABUS</button>
                                                                    <Modal show={syllabus} onHide={() => { setSyllabus(false) }}>
                                                                        <Modal.Header closeButton>
                
                                                                            <h3 >Course Name</h3>
                
                                                                        </Modal.Header>
                                                                        <Modal.Body>
                                                                            <p>Syllabus Details</p>
                                                                        </Modal.Body>
                
                                                                        <Modal.Footer>
                                                                            <button className='btn-outline-danger'>Close</button>
                                                                        </Modal.Footer>
                
                                                                    </Modal>
                                                                        </div>
                                                                    </div>
                                                                </div> */}


                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </section>


    </>
  )
}

export default Course_Frame;



{/**/ }



