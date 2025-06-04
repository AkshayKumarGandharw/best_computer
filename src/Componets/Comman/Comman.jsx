    import React from 'react';
    import '../../App';
    import { Container,Row,Col } from 'react-bootstrap';
    import {Link} from 'react-router-dom';
    
    function Comman({props}) {
      return (
        <section className='width-height-section'> 
            <div className='Comman-div p-100'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className=''>{props.title}</h2>
                            <p className=''><Link to='/'>{props.label}</Link>-{props.subtitle}</p>
                        
                        </Col>
                    </Row>
                </Container>
            
        </div>


        </section>
        
      )
    }
    
    export default Comman