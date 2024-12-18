import React from 'react';
import '../index.css';
import { Button , Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Create = () => {
  return (
    <Container >
        <Row className="p-3 text-light custom-shape2">
            <Col>
            <InputGroup hasValidation className="mt-3">
            <InputGroup.Text>Expense Name/Type</InputGroup.Text>
            <Form.Control type="text" required isInvalid />
            <Form.Control.Feedback type="invalid">
                Please choose a valid name.
            </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mt-3">
            <InputGroup.Text>Expense Amount</InputGroup.Text>
            <Form.Control type="number" />
            </InputGroup>
            
            <InputGroup className="mt-3">
            <InputGroup.Text>Expense Date</InputGroup.Text>
            <Form.Control type="date" />
            </InputGroup>

            <Button className="mt-4">
                Submit Report
            </Button>


            </Col>
        </Row>
    </Container>
  );

}

export default Create