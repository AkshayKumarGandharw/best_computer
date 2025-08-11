import React, { useState, useContext } from 'react';
import { Container, Row, Col, Modal, Form } from 'react-bootstrap';
import Comman from '../Comman/Comman';
import Course_syllabus from '../Comman/Course_syllabus';
import Course_Form from '../Comman/Course_Form';
import noteContext from '../../ContextAPI/CourseContext/noteContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faIndianRupeeSign, faTimeline } from '@fortawesome/free-solid-svg-icons';
import SwiperTeachers from '../Comman/SwiperTeachers';


function Acc_and_tax() {
   const a = useContext(noteContext)
  return (
    <>
        <Comman props={{title:"Education",subtitle:"Accounting and Taxation"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Accounting & Taxation Syllabus", content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />
        <section className='course-frame'>
        <Container fluid className='colorBackground'>
          <Row>
            <Col lg={8}>
              <h2 className='px-3 py-2'>{a.titleAt}</h2>
              <p className='px-3 py-2'>{a.shortDescriptionTx}</p>
              <p className='px-3 '>Duration:{a.courseDurationOne}</p>
              <p className='px-3 '>Fee:{a.courseFeeTwo}</p>

              <h2 className='px-3 pt-3'>Syllabus</h2>
              <ul className='mx-3 '>
                <li ><a href="">{a.linkOne}</a></li>
                <li ><a href="">{a.linkOne}</a></li>
                <li ><a href="">{a.linkOne}</a></li>
                <li ><a href="">{a.linkOne}</a></li>
                <li ><a href="">{a.linkOne}</a></li>
                <li ><a href="">{a.linkOne}</a></li>
                <li ><a href="">{a.linkOne}</a></li>

              </ul>
              <h2 className='px-3 pt-3 pb-2'>Book Now </h2>
              <div className="form-reg-here" >

                <Course_Form />
              </div>
              <h2 className='px-3 pt-3'>Experience Teachers </h2>
              <div className="experince-teachers">
                <SwiperTeachers/>

              </div>

            </Col>
            <Col lg={4} className='mb-4'>
              <div className="box-3">
                <div className='course-tag'>
                  <h3 className='center '>COURSE</h3>
                </div>
                <div className="img">
                  <img src={a.titleImageTx} alt="" className='img-fluid width-less-100' />
                </div>
                <div className="course-detail">
                  <div className="row course-row px-3 pe-3">
                    <div className="col d-flex py-3  ">
                      <div className="icon-background"><FontAwesomeIcon icon={faBookOpenReader} className='' /></div>
                      <div className="ms-2 "><h3 className='h3'><b>{a.titleAt} </b></h3></div>
                    </div>
                  </div>
                  <div className="row course-row px-3 pe-3 ">
                    <div className="col d-flex">
                      <div className="icon-background"><FontAwesomeIcon icon={faTimeline} /></div>
                      <div className="col"><p><b>&nbsp;{a.courseDurationOne} </b></p></div>
                    </div>
                  </div>
                  <div className="row course-row px-3 pe-3 pb-3">
                    <div className="col d-flex">
                      <div className="icon-background"> <FontAwesomeIcon icon={faIndianRupeeSign} /></div>
                      <div className="col"><p><b> &nbsp;{a.courseFeeTwo} </b></p></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </section>

    </>
  )
}

export default Acc_and_tax