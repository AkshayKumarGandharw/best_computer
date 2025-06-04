import React from 'react';
import './topnavbar.css';
import '../../App';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router';
import isDropdown, { NavDropdown } from 'react-bootstrap';

import JSON_File from '../../JSON_File/Json_menu.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function Topnavbar() {

  function Header_Menu({item}){

    return <Link to={item.link} className='nav-link'>{item.label}</Link>
  }
  
  function Drop_Down_Submenu({item}){
    return(

      <NavDropdown title={item.label} className='navdrop_submenu'>
        {
          // execute map function 

          item.DropdownMenu.map((item,index)=>{

            return <Link to={item.link} className='nav-link' >{item.label}</Link>
          })

        }

      </NavDropdown>
    )
  }

  
  return (
    <Navbar expand="lg"  id="Topnavbar">
      <Container fluid>
        <Navbar.Brand href="#">

          <img src={'./images/bcecpl_logo.jpeg'} alt="bci_logo" className='img-fluid' width={100} height={100}/>
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
              JSON_File.map((item,index)=>{

                 if(item.isDropdown == true)
                 {
                   return <Drop_Down_Submenu item={item} key={index}/>
                 }
                  
                  else{
                    return  <Header_Menu item={item} key={index}/>
                  //  return <Link to={item.link} className='nav-link' key={index}>{item.label}</Link>
                  }
                 
                }
              )


            }
            </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-primary">Log in &nbsp; &nbsp;
              <FontAwesomeIcon icon={faRightToBracket}/>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topnavbar