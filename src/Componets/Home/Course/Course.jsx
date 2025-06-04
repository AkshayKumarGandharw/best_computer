import {React,useState} from 'react';
import '../Home.css';
import { Container, Row, Col, Modal, Form } from 'react-bootstrap';


function Course() {
    const course_object = [{
        image: "./images/tally_taxation_img.jpeg",
        course_name: "Accounting and Taxation",
        duration: "6 Months",
        fee: "13000/-"
    },
    {
        image: "./images/graphics_img.jpeg",
        course_name: "Graphics Design",
        duration: "3 Months",
        fee: "7000/-"
    },
    {
        image: "./images/office_automation.jpeg",
        course_name: "Computer Basic",
        duration: "3 Months",
        fee: "6000/-"
    }
        ,
    {
        image: "./images/pgdca_dca.jpeg",
        course_name: "Pgdca and Dca",
        duration: "1 Years",
        fee: "22000/- and 12000/-"
    },
    {
        image: "./images/share_market.jpeg",
        course_name: "Share Market",
        duration: "3 Months",
        fee: "8000/-"
    },
    {
        image: "./images/spoken_english.jpeg",
        course_name: "Spoken English",
        duration: "3 Months",
        fee: "7000/-"
    }, {
        image: "./images/video_editing.jpeg",
        course_name: "Video Editing",
        duration: "3 Months",
        fee: "15000/-"
    }, {
        image: "./images/website_design.jpeg",
        course_name: "Website Design",
        duration: "6 Months",
        fee: "15000/-"
    }, {
        image: "./images/tally_taxation_img.jpeg",
        course_name: "Accounting & Taxation Solutions",
        duration: "6 Months",
        fee: "15000/-"
    }, {
        image: "./images/share_market.jpeg",
        course_name: "Digital Marketing",
        duration: "3 Months",
        fee: "7000/-"
    }
    ]
    let [bool ,setBool]=useState(false);
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
                                    <Col>
                                        <div className="box">
                                            <div className="img">
                                                <img src={item.image} alt="" className='img-fluid' />
                                            </div>
                                            <div className="course-detail ">
                                                <div className="Heading">
                                                    <h5><b>Course Details:</b></h5>
                                                </div>
                                                <div className="row course-row">
                                                    <div className="col"><p><b>Course: </b></p></div>
                                                    <div className="col"><p><b>{item.course_name} </b></p></div>
                                                </div>
                                                <div className="row course-row">
                                                    <div className="col"><p><b>Duration: </b></p></div>
                                                    <div className="col"><p><b>{item.duration} </b></p></div>
                                                </div>
                                                <div className="row course-row">
                                                    <div className="col"><p><b>Fee: </b></p></div>
                                                    <div className="col"><p><b>{item.fee} </b></p></div>
                                                </div>

                                                <div className='center btn'>
                                                    <button className='btn-outline-premiry' id='' onClick={()=>{setBool(true)}}>REGISTER NOW</button>
                                                    <Modal show={bool} onHide={()=>{setBool(false)}}>
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

                                                    <button className='btn-outline-accent margin-left' id=''>VIEW SYLLABUS</button>
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