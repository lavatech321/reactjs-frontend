import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../index.css';

function Header() {
  return (
    <Container className="mt-5">
    <Row className="bg-dark p-3 text-light text-center shadow mb-5">
        <Col>
            <h1>Conncur Expense Report Submit</h1>
        </Col>
    </Row>
    <Row className="bgcolor px-2 py-2 custom-shape">
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" className="text-muted"><h5>Create Expense Report</h5></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-muted"><h5>View Expense Report</h5></Nav.Link>
      </Nav.Item>
    </Nav>
    </Row>
    </Container>
  );
}

export default Header;