import React, {useRef,useState} from 'react';
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
import { Pagination,Navigation } from 'swiper/modules';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight, faBullhorn, faLink, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faNewspaper } from '@fortawesome/free-regular-svg-icons';


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
                  PLACEMENT <span className='outline-primary'></span>
                </h5>
              </div>
              <Swiper
                autoplay={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination,Navigation]}
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
                  ANNOUNCEMENT <span className='outline-primary'></span>
                </h5>
              </div>
              <Swiper
                autoplay={true}
                
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >

                <SwiperSlide slidesPerView={1} >

                  <div className="row ">
                    <div className="col d-flex">
                      <div className="col">
                        <div className="card">
                          
                          <div className="img-card">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, magni. Pariatur aliquam recusandae dicta, accusamus expedita optio ipsum ut debitis.</p>
                          </div>
                          <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea quisquam sint rem perferendis fuga, neque qui! Adipisci doloremque, debitis natus, et itaque dolores id aspernatur impedit saepe aperiam temporibus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          
                          <div className="img-card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, assumenda.</p>
                          </div>
                          <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio beatae voluptatibus quae expedita nam architecto laudantium, alias rerum cum vero ipsam dolorum.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                         
                          <div className="img-card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi harum ipsa quod impedit placeat eveniet, laborum neque ut eaque eius incidunt ab nobis suscipit.</p>
                          </div>
                          <div className="content">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae. Vero, itaque vitae? Voluptatum qui sed debitis quo? Repellat alias natus magni laudantium quisquam vel iste eveniet numquam, at nisi quos dolores, ea possimus, provident dolorem delectus iure officiis. Fugit eum rerum reiciendis impedit officiis enim cupiditate quis sed quos.</p>
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
                          
                          <div className="img-card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, numquam?</p>
                          </div>
                          <div className="content">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum consectetur voluptates ipsa!</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          
                          <div className="img-card">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugit tenetur? Laboriosam, exercitationem odio. Veniam temporibus distinctio culpa?</p>
                          </div>
                          <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo repellendus vel, possimus cupiditate similique, quisquam a nihil maxime ratione corporis aliquid voluptate dignissimos eum!</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                         
                          <div className="img-card">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus optio vitae, aspernatur obcaecati facere ad itaque voluptates eos. Numquam corporis odio maxime?</p>
                          </div>
                          <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis excepturi optio, suscipit deleniti et maxime porro eveniet minus sunt incidunt!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </Col>
        </Row>
       </Container>   

       </section>
      
   
  );
}

export default Notice;