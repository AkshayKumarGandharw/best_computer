import React from 'react';
import '../../Home/Home.css';
import { Container, Row, Col } from 'react-bootstrap';

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
import {  faBullhorn} from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import ScrollContainer from '../../Comman/ScrollContainer';


function Notice() {
  return (

    <section id='Notice-section'>
      <h2 className='center margin-100 pt-5'><span className='text-purple'><b>Best Computer Education</b>
        <br></br><b>& Consultancy Pvt. Ltd.</b>
      </span> <span className='text-green'><i><b>Notice</b></i></span></h2>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className='mb-5'>
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
                slidesPerView={3}
                spaceBetween={1}
                pagination={{
                  clickable: true,
                }}
                
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >

                <SwiperSlide >
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
                </SwiperSlide>
                  <SwiperSlide >
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
                </SwiperSlide>
                  <SwiperSlide  >
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
                </SwiperSlide>
                  <SwiperSlide>
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
                </SwiperSlide>
                  <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>

              </Swiper>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="latest-post" id='latest-announcement'>
              <div className="heading-post">
                <h5>
                  <FontAwesomeIcon icon={faBullhorn} /> &nbsp;
                  ANNOUNCEMENT
                </h5>
              </div>
              <div className="news-container">
                <ScrollContainer/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>


  );
}

export default Notice;