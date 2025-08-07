    import React from 'react';
    import '../../App';
    import Comman from '../Comman/Comman';
    import { Container,Row,Col,Button } from 'react-bootstrap';
    
    function Spoken_english_syllabus() {
      return (
        <>
         <Comman props={{title:"Download",subtitle:"Spoken English | Syllabus"}}/>
           <section className='download-section'>
                                    <Container className='download-container'>
                                      <h2 className='text-light-gray'>SPOKEN ENGLISH | SYLLABUS</h2>
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
                                            <Button className='preview-button mb-3'>Preview</Button>
                                            <Button className='preview-button mb-3'>Download</Button>
                                           
                                          </div>
                                        </Col>
                                      </Row>
                                    </Container>
          </section>
        
        </>
      )
    }
    
    export default Spoken_english_syllabus;