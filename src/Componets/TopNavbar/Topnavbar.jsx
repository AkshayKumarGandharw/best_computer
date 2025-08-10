import React,{useState} from 'react';
import './topnavbar.css';
import '../../App';
import '../Home/Home';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import { Modal, ModalFooter } from 'react-bootstrap';
import { Link } from 'react-router';
import { NavDropdown } from 'react-bootstrap';

import JSON_File from '../../JSON_File/Json_menu.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import LoginForm from '../Forms/LoginForm';





function Topnavbar() {

  //main menu Home, Course, AboutUs, ContactUs, Download
  function Header_Menu({ item }) {

    return <Link to={item.link} className='nav-link'>{item.label}</Link>
  }

  //dropdown submenu course - 
  // acc. and tax.
  // graphic design
  // website design
  // spoken english
  // digital marketing
  // share market
  // video editing
  // pgdca and dca
  // acc. and tax. solutions
  // computer basic
  function Drop_Down_Submenu({ item }) {
    return (

      <NavDropdown title={item.label} className='navdrop_submenu'>
        {
          // execute map function 

          item.DropdownMenu.map((item, index) => {

            return <Link to={item.link} className='nav-link'>{item.label} </Link>
          })

        }

      </NavDropdown>
    )
  }

  // Login Button for usestate 
  let [setLoginMe, setClickMeLogin] = useState(false);

  // Topnavbar return function 
  return (

    <Navbar expand="lg" id="Topnavbar" >
      <Container fluid>
        <Navbar.Brand href="#">

          <img src={'./images/bcecpl_logo.jpeg'} alt="bci_logo" className='img-fluid' width={100} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">


          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            
            {
              //execute map function
              JSON_File.map((item, index) => {

                if (item.isDropdown === true) {
                  return <Drop_Down_Submenu item={item} key={index} />
                }

                else {
                  return <Header_Menu item={item} key={index} />
                  //  return <Link to={item.link} className='nav-link' key={index}>{item.label}</Link>
                }

              }
              )


            }
          </Nav>
           
          {/* Form section */}
          <Form className="d-flex ">
             
            {/* search box with button */}
            <InputGroup className='input-search mx-2'>
              <Form.Control
                placeholder='Search...'
                style={{ height: '50px' }}
              />
              <Button variant='btn btn-outline-accent' style={{ height: '50px' }}>
                Seach
              </Button>

            </InputGroup>


            {/* login button with modal  */}
            <InputGroup>
              <Button variant="btn btn-outline-accent" onClick={() => { setClickMeLogin(true) }}>Log in &nbsp; &nbsp;
                <FontAwesomeIcon icon={faRightToBracket} />
              </Button>
            </InputGroup>

            <Modal show={setLoginMe} onHide={() => { setClickMeLogin(false) }}>
              <Modal.Header closeButton>
                <h3 className='center'>LOGIN FORM</h3>
              </Modal.Header>
              <Modal.Body>
                <LoginForm />
              </Modal.Body>
              <ModalFooter className='center'>
                 <Button variant="btn btn-outline-accent" type="submit">
                                Log In
                 </Button>
              </ModalFooter>
            </Modal>

          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topnavbar;