    import React from 'react'
    import '../../App';
    import Comman from '../Comman/Comman';
    import { Container,Row,Col,Button } from 'react-bootstrap';
    import Course_syllabus from '../Comman/Course_syllabus';


    function Acc_tax_solu_syllabus() {
      return (
        <>
        <Comman props={{title:"Download",subtitle:"Accounting and Taxation Solutions | Syllabus"}}/>
               
                 
        {/* <Course_syllabus  props={{downloadUrl:"https://www.google.com/ " , fileName:"file.pdf" , buttonText:"Acc and Tax. Syllabus"}}/> */}
        <section className='download-section'>
          <Container className='download-container'>
            <h2 className='text-light-gray'>ACCOUNTING AND TAXATION SOLUTION | SYLLABUS</h2>
            <Row>
              <Col lg={8}>
              <div className='image-view-download'>
                <div className='img-upload-download'>
                  <img src="" alt="" />
                </div>
              </div>
              </Col>
              <Col lg={4}>
                <div className="button-section">
                  <Button className='preview-button btn btn-outline-accent mb-3'>Preview</Button>
                  <Button className='preview-button  btn btn-outline-accent mb-3'>Download</Button>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        </>
      )
    }
    
    export default Acc_tax_solu_syllabus