import { useState } from 'react';
import '../Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Gallery() {

  let [key, setKey] = useState('event');

  return (
    <section id='Gallery-section'>
      <h2 className='center margin-b-50'><span className='text-purple'><b>Best Computer Education <br></br>& Consultancy Pvt. Ltd.</b></span> <span className='text-green'><i><b>Gallery</b></i></span></h2>

      <Container className='container'>
        <Row className='row'>
          <Col id='gallery-menu-pill-buttons'>
            <div className="menu-button">

              <Tabs
                id="gallery-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className='tabs'
              >

                <Tab eventKey='event' title='Events' >
                  <div className=" row area-gallery ">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    < div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey='achievments' title='Achievements'>
                   <div className=" row area-gallery ">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    < div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                  <div className=" row area-gallery ">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    < div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey='classes' title='Classes'>
                   <div className=" row area-gallery ">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    < div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                  <div className=" row area-gallery ">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    < div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                  <div className=" row area-gallery ">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    < div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="gallery-width">
                      <img src={'./images/drmoore2.webp'} alt="" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                </Tab>


              </Tabs>


              {/* </div> */}
            </div>
          </Col>
        </Row>

      </Container>

    </section>
  )
}

export default Gallery; 