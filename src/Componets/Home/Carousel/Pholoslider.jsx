import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Form, Button,Modal,ModalFooter } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import LoginForm from '../../LoginForm/LoginForm';



function Pholoslider() {
  let [setLoginMe,setClickMeLogin] =useState(false);
  return (
    <section id='Photoslider-section'>
      <Carousel>
        <Carousel.Item>
          <div className="height-box-image">
            <img src={'./Images/SITE_SPACEPLAN_1.png'} alt="" className='img-fluid' />

          </div>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <div className="height-box-image">

            <img src={'./Images/2023_INTERIOR_DESIGN_SLIDE_1.png'} alt="" className='img-fluid' />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="height-box-image">

            <img src={'./Images/b0001.jpg'} alt="" className='img-fluid' />

          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="Register-form">
        <h2 className='center my-2'>Registration Here</h2>
        <div className="mb-3 mt-3">
          <input type="text" className='form-control' placeholder='Enter your name' />
        </div>
        <div className="mb-3">
          <input type="text" className='form-control' placeholder='Enter your email' />
        </div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter your number"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Send OTP
          </Button>
        </InputGroup>
        <div className="mb-3">
          <input type="text" className='form-control' placeholder='Enter your OTP' />
        </div>
        <div className="center">
          <Button variant="outline-primary start-0 m-3" id="button-addon2">
            Register Now  &nbsp; &nbsp; <FontAwesomeIcon icon={faUserPlus} />
          </Button>
          <Button variant="outline-primary m-3" id="button-addon2"  onClick={()=>{setClickMeLogin(true)}}>
            Log In &nbsp; &nbsp; <FontAwesomeIcon icon={faRightToBracket} />
          </Button>
          <Modal show={setLoginMe} onHide={() => { setClickMeLogin(false) }}>
            <Modal.Header closeButton>
              <h3 className='center'>LOGIN FORM</h3>
            </Modal.Header>
            <Modal.Body>
              <LoginForm/>
            </Modal.Body>
            <ModalFooter className='center'>

            </ModalFooter>
          </Modal>
        </div>

      </div>

    </section>



  )
}

export default Pholoslider;