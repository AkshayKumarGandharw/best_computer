import { React, useState } from 'react';
import '../Home.css';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faIndianRupeeSign, faTimeline } from '@fortawesome/free-solid-svg-icons';
//import syllabus from '../../../Componets/ObjectFile/Syllabus.json';


function Course() {
    const course_object = [{
        image: "./images/tally_taxation.jpg",
        course_name: "ACCOUNTING & TAXATION",
        duration: "6 Months",
        fee: "13000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    },
    {
        image: "./images/graphic_design.png",
        course_name: "GRAPHIC DESIGN",
        duration: "3 Months",
        fee: "7000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    },
    {
        image: "./images/office_automation.jpg",
        course_name: "COMPUTER BASIC",
        duration: "3 Months",
        fee: "6000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    },
    {
        image: "./images/pgdca_dca.jpeg",
        course_name: "PGDCA",
        duration: "1 Years",
        fee: "22000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    },
    {
        image: "./images/share_market.jpg",
        course_name: "SHARE MARKET",
        duration: "3 Months",
        fee: "8000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    },
    {
        image: "./images/english_spoken.jpg",
        course_name: "SPOKEN ENGLISH",
        duration: "3 Months",
        fee: "7000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    }, {
        image: "./images/video_editing.png",
        course_name: "VIDEO EDITING",
        duration: "3 Months",
        fee: "15000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    }, {
        image: "./images/website_design_2.jpg",
        course_name: "WEBSITE DESIGN",
        duration: "6 Months",
        fee: "15000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    }, {
        image: "./images/tally_taxation_2.png",
        course_name: "ACC. & TAX. SOLUTIONS",
        duration: "6 Months",
        fee: "15000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    }, {
        image: "./images/digital_marketing.jpg",
        course_name: "DIGITAL MARKETING",
        duration: "3 Months",
        fee: "7000/-",
        syllabus_Details: "First -1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate natus harum ullam commodi est velit alias culpa, necessitatibus porro!"
    }
    ]
    let [bool, setBool] = useState(false);
    let [syllabus, setSyllabus] = useState(false);


    return (
        <>
            <section id="course">
                <h2 className='center margin-100'><span className='text-purple'><b>Best Computer Education <br></br>& Consultancy Pvt. Ltd.</b></span> <span className='text-green'><i><b>Course</b></i></span></h2>
                <Container>
                    <Row>
                        {
                            //map fuction execution
                            course_object.map((item, index) => {
                                return (
                                    <Col key={index} lg={6}>

                                        <div className="box ">
                                            <div className='course-tag'>
                                                <h3 className='center '>COURSE</h3>
                                            </div>
                                            <div className="img">
                                                <img src={item.image} alt="" className='img-fluid' />
                                            </div>
                                            <div className="course-detail">
                                                <div className="row course-row">
                                                    <div className="col d-flex py-3">
                                                        <div className="icon-background"><FontAwesomeIcon icon={faBookOpenReader} className='' /></div>
                                                        <div className="ms-2 "><h3 className='h3'><b>{item.course_name} </b></h3></div>
                                                    </div>
                                                </div>
                                                <div className="row course-row">
                                                    <div className="col d-flex">
                                                        <div className="icon-background"><FontAwesomeIcon icon={faTimeline} /></div>
                                                        <div className="col"><p><b>{item.duration} </b></p></div>
                                                    </div>
                                                </div>
                                                <div className="row course-row">
                                                    <div className="col d-flex">
                                                        <div className="icon-background"> <FontAwesomeIcon icon={faIndianRupeeSign} /></div>
                                                        <div className="col"><p><b>{item.fee} </b></p></div>
                                                    </div>
                                                </div>
                                                <div className="row course-row">
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
                                                </div>
                                                
                                                
                                            </div>
                                        </div>


                                    </Col>
                                )
                            })



                        }
                        {/*  
                        <Col>
                            <div className='box'>
                                <div className="img">
                                    <img src={'./images/tally_taxation_img.jpeg'} alt="" className='img-fluid' height={200} />
                                </div>
                                <div className="course-detail">
                                    <h5><b>Course Details:</b></h5>
                                    <div className="row course-row">
                                        <div className="col"><p><b>Course: </b></p></div>
                                        <div className="col"><p><b>Graphics Design</b></p></div>
                                    </div>
                                    <div className="row course-row">
                                        <div className="col"><p><b>Duration: </b></p></div>
                                        <div className="col"><p><b> 6 Months</b></p></div>
                                    </div>
                                    <div className="row course-row">
                                        <div className="col"><p><b>Fee: </b></p></div>
                                        <div className="col"><p><b>15000/- </b></p></div>
                                    </div>

                                    <div className='center'>
                                        <button className='btn-outline-premiry' id=''>REGISTER NOW</button>
                                        <button className='btn-outline-accent margin-left' id=''>VIEW SYLLABUS</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="box">
                                <div className="img">
                                    <img src={'./images/tally_taxation_img.jpeg'} alt="" className='img-fluid' height={200} />
                                </div>
                                <div className="course-detail">
                                    <h5><b>Course Details:</b></h5>
                                    <div className="row course-row">
                                        <div className="col"><p><b>Course: </b></p></div>
                                        <div className="col"><p><b>Graphics Design</b></p></div>
                                    </div>
                                    <div className="row course-row">
                                        <div className="col"><p><b>Duration: </b></p></div>
                                        <div className="col"><p><b> 6 Months</b></p></div>
                                    </div>
                                    <div className="row course-row">
                                        <div className="col"><p><b>Fee: </b></p></div>
                                        <div className="col"><p><b>15000/- </b></p></div>
                                    </div>

                                    <div className='center'>
                                        <button className='btn-outline-premiry' id=''>REGISTER NOW</button>
                                        <button className='btn-outline-accent margin-left' id=''>VIEW SYLLABUS</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        */}
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Course;