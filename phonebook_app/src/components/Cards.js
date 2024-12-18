import React from 'react';
import { Badge, Row, Col, Card, Dropdown, Button } from 'react-bootstrap'; // Import necessary components
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../index.css'; 

function Cards() {
    return (
        <Row>
	    <Col xs="6" xl="3">
        <Card className="mb-3">
            <Card.Body className="position-relative">
                {/* Dropdown using React Bootstrap */}
                <Dropdown className="float-end">
                    <Dropdown.Toggle variant="muted" id="dropdown-basic">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Remove</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="d-flex align-items-center">
                    <Card.Img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        className="rounded-circle img-thumbnail"
                        style={{ width: '4rem', height: '4rem' }} // Resizing the image
                    />
                    <div className="flex-1 ms-3">
                        <h5 className="font-size-16 mb-1">
                            <a href="https://google.com" className="text-dark">James Nix</a>
                        </h5>
                        <Badge pill bg="success" className="mb-0">Full Stack Developer</Badge> {/* Use Badge component */}
                    </div>
                </div>
                <div className="mt-3 pt-1">
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <span className="m-2">046 5685 6969</span>
                         
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <a href="/cdn-cgi/l/email-protection" className="m-2 __cf_email__" data-cfemail="b9f3d8d4dccaf7d0c1f9cac9c097dad6d4">[email&#160;protected]</a>
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="me-3" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    <span className="m-2">5 Boar Lane SELLING 2LG</span>
                    </p>
                </div>
                <div className="d-flex gap-5 pt-4">
                    <Button variant="muted" className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        Profile
                    </Button>
                    <Button variant="primary" className="d-flex align-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        Contact
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </Col>


        <Col xs="6" xl="3">
        <Card className="mb-3">
            <Card.Body className="position-relative">
                {/* Dropdown using React Bootstrap */}
                <Dropdown className="float-end">
                    <Dropdown.Toggle variant="muted" id="dropdown-basic">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Remove</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="d-flex align-items-center">
                    <Card.Img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        className="rounded-circle img-thumbnail"
                        style={{ width: '4rem', height: '4rem' }} // Resizing the image
                    />
                    <div className="flex-1 ms-3">
                        <h5 className="font-size-16 mb-1">
                            <a href="https://google.com" className="text-dark">James Nix</a>
                        </h5>
                        <Badge pill bg="success" className="mb-0">Full Stack Developer</Badge> {/* Use Badge component */}
                    </div>
                </div>
                <div className="mt-3 pt-1">
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <span className="m-2">046 5685 6969</span>
                         
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <a href="/cdn-cgi/l/email-protection" className="m-2 __cf_email__" data-cfemail="b9f3d8d4dccaf7d0c1f9cac9c097dad6d4">[email&#160;protected]</a>
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="me-3" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    <span className="m-2">5 Boar Lane SELLING 2LG</span>
                    </p>
                </div>
                <div className="d-flex gap-5 pt-4">
                    <Button variant="muted" className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        Profile
                    </Button>
                    <Button variant="primary" className="d-flex align-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        Contact
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </Col>

        <Col xs="6" xl="3">
        <Card className="mb-3">
            <Card.Body className="position-relative">
                {/* Dropdown using React Bootstrap */}
                <Dropdown className="float-end">
                    <Dropdown.Toggle variant="muted" id="dropdown-basic">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Remove</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="d-flex align-items-center">
                    <Card.Img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        className="rounded-circle img-thumbnail"
                        style={{ width: '4rem', height: '4rem' }} // Resizing the image
                    />
                    <div className="flex-1 ms-3">
                        <h5 className="font-size-16 mb-1">
                            <a href="https://google.com" className="text-dark">James Nix</a>
                        </h5>
                        <Badge pill bg="success" className="mb-0">Full Stack Developer</Badge> {/* Use Badge component */}
                    </div>
                </div>
                <div className="mt-3 pt-1">
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <span className="m-2">046 5685 6969</span>
                         
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <a href="/cdn-cgi/l/email-protection" className="m-2 __cf_email__" data-cfemail="b9f3d8d4dccaf7d0c1f9cac9c097dad6d4">[email&#160;protected]</a>
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="me-3" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    <span className="m-2">5 Boar Lane SELLING 2LG</span>
                    </p>
                </div>
                <div className="d-flex gap-5 pt-4">
                    <Button variant="muted" className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        Profile
                    </Button>
                    <Button variant="primary" className="d-flex align-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        Contact
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </Col>

        <Col xs="6" xl="3">
        <Card className="mb-3">
            <Card.Body className="position-relative">
                {/* Dropdown using React Bootstrap */}
                <Dropdown className="float-end">
                    <Dropdown.Toggle variant="muted" id="dropdown-basic">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Remove</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="d-flex align-items-center">
                    <Card.Img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        className="rounded-circle img-thumbnail"
                        style={{ width: '4rem', height: '4rem' }} // Resizing the image
                    />
                    <div className="flex-1 ms-3">
                        <h5 className="font-size-16 mb-1">
                            <a href="https://google.com" className="text-dark">James Nix</a>
                        </h5>
                        <Badge pill bg="success" className="mb-0">Full Stack Developer</Badge> {/* Use Badge component */}
                    </div>
                </div>
                <div className="mt-3 pt-1">
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <span className="m-2">046 5685 6969</span>
                         
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <a href="/cdn-cgi/l/email-protection" className="m-2 __cf_email__" data-cfemail="b9f3d8d4dccaf7d0c1f9cac9c097dad6d4">[email&#160;protected]</a>
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="me-3" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    <span className="m-2">5 Boar Lane SELLING 2LG</span>
                    </p>
                </div>
                <div className="d-flex gap-5 pt-4">
                    <Button variant="muted" className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        Profile
                    </Button>
                    <Button variant="primary" className="d-flex align-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        Contact
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </Col>

        <Col xs="6" xl="3">
        <Card className="mb-3">
            <Card.Body className="position-relative">
                {/* Dropdown using React Bootstrap */}
                <Dropdown className="float-end">
                    <Dropdown.Toggle variant="muted" id="dropdown-basic">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Remove</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="d-flex align-items-center">
                    <Card.Img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        className="rounded-circle img-thumbnail"
                        style={{ width: '4rem', height: '4rem' }} // Resizing the image
                    />
                    <div className="flex-1 ms-3">
                        <h5 className="font-size-16 mb-1">
                            <a href="https://google.com" className="text-dark">James Nix</a>
                        </h5>
                        <Badge pill bg="success" className="mb-0">Full Stack Developer</Badge> {/* Use Badge component */}
                    </div>
                </div>
                <div className="mt-3 pt-1">
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <span className="m-2">046 5685 6969</span>
                         
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-3" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <a href="/cdn-cgi/l/email-protection" className="m-2 __cf_email__" data-cfemail="b9f3d8d4dccaf7d0c1f9cac9c097dad6d4">[email&#160;protected]</a>
                    </p>
                    
                    <p className="text-muted mb-0 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="me-3" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    <span className="m-2">5 Boar Lane SELLING 2LG</span>
                    </p>
                </div>
                <div className="d-flex gap-5 pt-4">
                    <Button variant="muted" className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        Profile
                    </Button>
                    <Button variant="primary" className="d-flex align-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        Contact
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </Col>

        </Row>
    );
}

export default Cards;
