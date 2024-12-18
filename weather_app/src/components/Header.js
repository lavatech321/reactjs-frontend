import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const Header = () => {
  return (
    <Container className="mx-auto">
      <Row className="justify-content-center">
        <Col xs="10" className="text-center">
          <div className="header mx-auto">
            <h1>Weather App</h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
