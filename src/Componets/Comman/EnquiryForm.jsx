import React from 'react';
import {Row,Col,Form} from 'react-bootstrap';

function EnquiryForm() {
    return (
        <>
            <Form className='form-property'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email Id:</Form.Label>
                        <Form.Control type="email" placeholder="Enter name@gmail.com" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Mobile No.:</Form.Label>
                        <Form.Control type="number" placeholder="+91 9999999999" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="All terms & condition accepted" />
                </Form.Group>

                
            </Form>

        </>
    )
}

export default EnquiryForm
