import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../index.css';

function Main() {
  
  return (
    <>
        <Container>
            <Row>
                 <Col xs="6" xl="6" className="bgcolor mt-5 mx-auto text-center py-3">
                 <h1 className="mb-4">User Form</h1>

                <InputGroup className="py-2">
                <InputGroup.Text>First Name</InputGroup.Text>
                <Form.Control type="text" />
                </InputGroup>

                <InputGroup className="py-2">
                <InputGroup.Text>Last Name</InputGroup.Text>
                <Form.Control type="text" />
                </InputGroup>

                <InputGroup className="py-2">
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control type="email" />
                </InputGroup>

                <InputGroup className="py-2">
                <InputGroup.Text>Phone number</InputGroup.Text>
                <Form.Control type="number" />
                </InputGroup>

                <InputGroup className="py-2">
                <InputGroup.Text>Password</InputGroup.Text>
                <Form.Control type="password" />
                </InputGroup>

                <InputGroup className="py-2">
                <InputGroup.Text>Confirm Password</InputGroup.Text>
                <Form.Control type="password" />
                </InputGroup>

                <InputGroup className="py-2">
                <InputGroup.Text>Address</InputGroup.Text>
                <Form.Control type="text" />
                </InputGroup>

                <InputGroup className="py-2">
                <Form.Control type="file" />
                </InputGroup>

                <DropdownButton drop={'down'} variant="primary" title={"State"} className="text-start py-2">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                
                <Button variant="secondary" className="my-3">
                    Submit
                </Button>


                 </Col>
            </Row>
        </Container>
    </>  

  );
}

export default Main;