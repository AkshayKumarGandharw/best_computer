import React from 'react';
import '../../Home/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination ,Scrollbar} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight, faBullhorn, faLink, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';


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
                  <FontAwesomeIcon icon={faLink}/> &nbsp;
                  IMPORTANTS <span className='outline-primary'> LINKS 2025</span></h5>
              </div>
              <Swiper
                direction={'vertical'}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,


                }}
                modules={[Pagination, Autoplay]}

                className="mySwiper"
              >



                <SwiperSlide slidesPerView={1} >

                  <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                        Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                        Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide> 
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                         Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                  </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                         Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                     <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                         Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                         Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                         Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                         Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faLinkSlash} /> &nbsp;
                         Links Topic
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
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
                  <FontAwesomeIcon icon={faBullhorn}/> &nbsp;
                  LATEST <span className='outline-primary'>ANNOUNCEMENTS 2025</span></h5>
              </div>
              <Swiper
                direction={'vertical'}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                   
                }}
                speed={5000}
                loop={true}
                pagination={{
                  clickable: true,


                }}
                modules={[Pagination, Autoplay]}

                className="mySwiper"
              >



                <SwiperSlide slidesPerView={1} >

                  <div className="row">
                     
                    <div className="col py-3 Scrollbar ">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3 Scrollbar">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide> 
                   <div className="row">
                     
                    <div className="col py-3 Scrollbar">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                  </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                     <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="row">
                     
                    <div className="col py-3">
                      <h5 className='color'>
                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                        Topic Heading
                         </h5>
                        
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                      <hr></hr>
                      <p className='py-1'> <FontAwesomeIcon icon={faArrowsTurnRight}/> &nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum, reiciendis modi earum explicabo beatae sit aspernatur veniam esse deserunt, repellendus quam voluptatem tenetur quae fuga nisi doloribus quaerat culpa.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Notice;