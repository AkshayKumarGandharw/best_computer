import React from 'react';
import { Form } from 'react-bootstrap';

function RegistrationForm() {
    return (
        <>
            <Form>
                <Form.Group >
                    <Form.Label className='mt-1'>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=" Enter Your Name"

                    />

                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-3'>Email-Id:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder=" Enter Your Email-Id"
                    />

                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-3'>Contact No.:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder=" Enter Your Contact No."
                    />

                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-3'>Address:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=" Enter Your Name"
                    />

                </Form.Group>
            </Form>

        </>
    )
}

export default RegistrationForm