 import React from 'react';
 import '../Home.css';
 import { Container,Row,Col } from 'react-bootstrap';
 
 function Gallery() {
   return (
     <section id='Gallery-section'>
             <h2 className='center margin-30'><span className='text-purple'><b>Best Computer Education <br></br>& Consultancy Pvt. Ltd.</b></span> <span className='text-green'><i><b>Gallery</b></i></span></h2>
             <div className="center  margin-50 ">
              <button className='btn-outline-premiry'><i>Achievement</i></button> &nbsp; &nbsp;
             <button className='btn-outline-premiry'><i>Events</i></button>
             </div>
        <Container>
            <Row>
                <Col className='d-flex'>
                  <div className="col-lg-4">
                    <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex'>
                  <div className="col-lg-4">
                    <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex'>
                  <div className="col-lg-4">
                    <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="gallery-width">
                    <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />

                    </div>
                  </div>
                </Col>
            </Row>
        </Container>

     </section>
   )
 }
 
 export default Gallery; 