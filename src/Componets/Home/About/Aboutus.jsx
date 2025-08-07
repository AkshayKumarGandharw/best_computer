 import React from 'react'
 import '../Home';
 import {Container,Row,Col} from 'react-bootstrap';
 import Comman from '../../Comman/Comman';
 
 function Aboutus() {
   return (
     <>
      <Comman props={{ title: "About", subtitle: "About Us" }}/>
      <section className='aboutus-section'>
        <Container className='aboutus-container'>
            <Row>
                <Col lg={4}>
                
                    <div className='img-aboutus'>
                    <img src='' alt=''/>
                   </div>
                </Col>
                <Col lg={8}>
                <div className='content-aboutus'>
                    <h2>About Us</h2>
                    <h4>Owner Name</h4>
                    <h5>Managing Director</h5>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                 <div className='about-your-self'>
                    <h3>WHAT ABOUT ME</h3>
                    <p> i am ak,,,,,,,,,,,,,,,,,</p>
                 </div>
                </Col>
            </Row>
        </Container>
      </section>
     </>
   )
 }
 
 export default Aboutus;