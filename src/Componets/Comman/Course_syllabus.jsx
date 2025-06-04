    import React from 'react';
    import {Container , Row,Col} from 'react-bootstrap';
    
    function Course_syllabus({props}) {
      return (
        <section className='syllabus-section'> 
                    <div className='p-50'>
                        <Container>
                            <Row>
                                <Col>
                                <div className="row d-flex">
                                    <div className="col">
                                    <h2 className=''>{props.titlecontent}</h2>
                                    <p className=''>{props.content}</p>
                                    </div>
                                    <div className="col">
                                        <h4>Course Duration</h4>
                                        <p> 6 Months</p>
                                    </div>
                                </div>
                                    
                                    
                                </Col>
                                 <div className="row d-flex table">
                                    <div className="col"></div>
                                    <div className="col"> 
                                        
                                    </div>
                                    <div className="col"> <h4>Course Total Fee</h4>
                                        <p>15000/-</p>
                                    </div>
                                    <div className="col"></div>
                                 </div>
                            </Row>
                        </Container>
                    
                </div>
        
        
                </section>
      )
    }
    
    export default Course_syllabus