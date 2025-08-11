import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Course_Form() {
  return (
    <Form className='form-property'>
      <Row className="mb-3">
        <Form.Group className='col-lg-6 col-md-12 col-sm-12' controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group   className='col-lg-6 col-md-12 col-sm-12' controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row>
      <Form.Group className="mb-3 col-lg-6 col-md-12 col-sm-12" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      

      <Form.Group className="mb-3 col-lg-6 col-md-12 col-sm-12" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group className='col-lg-4 col-md-3 col-sm-12' controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className='col-lg-4 col-md-3 col-sm-12' controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='col-lg-4 col-md-3 col-sm-12' controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I agree all terms and conditions" />
      </Form.Group>

      <Button variant="btn btn-outline-accent" type="submit">
        Book Now
      </Button>
    </Form>
  );
}

export default Course_Form;