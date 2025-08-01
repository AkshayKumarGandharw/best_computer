 import {react,useState} from 'react';
 import '../Home.css';
 import { Container,Row,Col } from 'react-bootstrap';
 import Tabs from 'react-bootstrap/Tabs';
 import Tab from 'react-bootstrap/Tab';
 
 function Gallery() {

  let [key,setKey] = useState('event');

   return (
     <section id='Gallery-section'>
             <h2 className='center margin-b-50'><span className='text-purple'><b>Best Computer Education <br></br>& Consultancy Pvt. Ltd.</b></span> <span className='text-green'><i><b>Gallery</b></i></span></h2>
             {/* <div className="center  margin-50 "> */}

          <Container className='container'>
            <Row className='row'>
            <Tabs
              id="gallery-tab"
              activeKey= {key}
              onSelect = {(k)=> setKey(k)}
              className='tabs'
            > 
             
                <Tab eventKey='event' title='Events'>
                  <Col className='d-flex mt-4'>
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
                </Tab>
                <Tab eventKey='achievments' title='Achievements'>
                    <Col className='d-flex mt-4'>
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
                <Col className='d-flex mt-4'>
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
                </Tab>
                <Tab eventKey='classes' title='Classes'>
                      <Col className='d-flex mt-4'>
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
                </Tab>
              
              
            </Tabs>


             {/* </div> */}
                
            </Row>
           
        </Container>

     </section>
   )
 }
 
 export default Gallery; 