import React, { useRef, useState } from 'react';
import '../../Home/Home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight, faBullhorn, faLink, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import ScrollContainer from '../../Comman/ScrollContainer';


function Notice() {
  return (

    <section id='Notice-section'>
      <h2 className='center margin-100 pt-5'><span className='text-purple'><b>Best Computer Education</b>
        <br></br><b>& Consultancy Pvt. Ltd.</b>
      </span> <span className='text-green'><i><b>Notice</b></i></span></h2>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="latest-post">
              <div className="heading-post">
                <h5>
                  <FontAwesomeIcon icon={faBuilding} /> &nbsp;
                  PLACEMENT
                </h5>
              </div>
              <Swiper
                autoplay={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >

                <SwiperSlide slidesPerView={1} >

                  <div className="row ">
                    <div className="col d-flex">
                      <div className="col">
                        <div className="card">
                          <p className='center'>Profile</p>
                          <div className="img-card">
                            <img src={'./images/digital_marketing.jpg'} alt="" />
                          </div>
                          <div className="content">
                            <p>Name:</p>
                            <p>Company:</p>
                            <p>Salary:</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <p className='center'>Profile</p>
                          <div className="img-card">
                            <img src={'./images/digital_marketing.jpg'} alt="" />
                          </div>
                          <div className="content">
                            <p>Name</p>
                            <p>Company</p>
                            <p>Salary</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <p className='center'>Profile</p>
                          <div className="img-card">
                            <img src={'./images/digital_marketing.jpg'} alt="" />
                          </div>
                          <div className="content">
                            <p>Name</p>
                            <p>Company</p>
                            <p>Salary</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row ">
                    <div className="col d-flex">
                      <div className="col">
                        <div className="card">
                          <p className='center'>Profile</p>
                          <div className="img-card">
                            <img src={'./images/digital_marketing.jpg'} alt="" />
                          </div>
                          <div className="content">
                            <p>Name:</p>
                            <p>Company:</p>
                            <p>Salary:</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <p className='center'>Profile</p>
                          <div className="img-card">
                            <img src={'./images/digital_marketing.jpg'} alt="" />
                          </div>
                          <div className="content">
                            <p>Name</p>
                            <p>Company</p>
                            <p>Salary</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <p className='center'>Profile</p>
                          <div className="img-card">
                            <img src={'./images/digital_marketing.jpg'} alt="" />
                          </div>
                          <div className="content">
                            <p>Name</p>
                            <p>Company</p>
                            <p>Salary</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </Col>

          <Col lg={6}>
            <div className="latest-post">
              <div className="heading-post">
                <h5>
                  <FontAwesomeIcon icon={faBullhorn} /> &nbsp;
                  ANNOUNCEMENT
                </h5>
              </div>
              <ScrollContainer/>
              {/* <Swiper
                autoplay={true}

                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >

                <SwiperSlide slidesPerView={1} >

                  <div className="row card-2">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam dolores dicta veniam unde, doloribus, id alias necessitatibus enim aperiam minus vero dolore voluptas corrupti, ex eveniet eum nihil! Voluptates, temporibus.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row ">

                  </div>
                </SwiperSlide>

              </Swiper> */}
            </div>
          </Col>
        </Row>
      </Container>

    </section>


  );
}

export default Notice;