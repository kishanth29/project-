import React from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import diluxshan from '../assets/members/diluxshan.jpeg';
import Ashani from '../assets/members/Ashani.jpeg';
import sampath from '../assets/members/sampath.jpeg';
import kishanth from '../assets/members/kishanth.jpg';
import thusya from '../assets/members/thusya.jpeg';




const UserProfile = () => {
  return (
    <>
    
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        <Row>
          <Col>
            <Breadcrumb className="bg-body-tertiary rounded-3 p-3 mb-4">
              <Breadcrumb.Item><Link to="#">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="#">About</Link></Breadcrumb.Item>
              <Breadcrumb.Item active>Our Team</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <img
                  src={diluxshan}
                  alt="avatar"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h5 className="my-3">S.Diluxshan</h5>
                <p className="text-muted mb-1">Customer Service Representatives</p>
                <p className="text-muted mb-4"> Inner Peace Portal</p>
                <div className="d-flex justify-content-center mb-2">
                  <Button variant="primary">Follow</Button>
                  <Button variant="outline-primary" className="ms-1">Message</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="mb-2 mt-4">
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Full Name</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">Selvaraththinam Diluxshan</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">ict21001@std.uwu.ac.lk</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Phone</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Mobile</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Address</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">White House Road, Badulla</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
   
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        

        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <img
                  src={Ashani}
                  alt="avatar"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h5 className="my-3">K . G . A . H I R U N I K A</h5>
                <p className="text-muted mb-1">Sales and Marketing Specialist</p>
                <p className="text-muted mb-4">  Inner Peace Portal </p>
                <div className="d-flex justify-content-center mb-2">
                  <Button variant="primary">Follow</Button>
                  <Button variant="outline-primary" className="ms-1">Message</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="mb-2 mt-4">
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Full Name</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">KATUKURUNDA GAMAGE ASHANI H I R U N I K A</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">ict21040@std.uwu.ac.lk</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Phone</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Mobile</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Address</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">White House Road, Badulla</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        

        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <img
                  src={sampath}
                  alt="avatar"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h5 className="my-3">P . M . S A M P A T H </h5>
                <p className="text-muted mb-1">Project Manager</p>
                <p className="text-muted mb-4"> Inner Peace Portal</p>
                <div className="d-flex justify-content-center mb-2">
                  <Button variant="primary">Follow</Button>
                  <Button variant="outline-primary" className="ms-1">Message</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="mb-2 mt-4">
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Full Name</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">P .MADHUSHAN S A M P A T H </p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">ict21063@std.uwu.ac.lk</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Phone</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Mobile</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Address</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">White House Road, Badulla</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
       

        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <img
                  src={kishanth}
                  alt="avatar"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h5 className="my-3">N.Kishanth</h5>
                <p className="text-muted mb-1">Wellness Coach</p>
                <p className="text-muted mb-4"> Inner Peace Portal</p>
                <div className="d-flex justify-content-center mb-2">
                  <Button variant="primary">Follow</Button>
                  <Button variant="outline-primary" className="ms-1">Message</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="mb-2 mt-4">
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Full Name</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">Nanthakumar Kishanth</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">ict21086@std.uwu.ac.lk</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Phone</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Mobile</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">0766752892</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Address</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">White House Road , Badulla</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
       
        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <img
                  src={thusya}
                  alt="avatar"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h5 className="my-3">S.Thusya</h5>
                <p className="text-muted mb-1">Fitness Director</p>
                <p className="text-muted mb-4"> Inner Peace Portal</p>
                <div className="d-flex justify-content-center mb-2">
                  <Button variant="primary">Follow</Button>
                  <Button variant="outline-primary" className="ms-1">Message</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="mb-2 mt-4">
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Full Name</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">Sritharan Thusya</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">ict21087@std.uwu.ac.lk</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Phone</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Mobile</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">0756350692</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <p className="mb-0">Address</p>
                  </Col>
                  <Col sm={9}>
                    <p className="text-muted mb-0">White House Road , Badulla</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default UserProfile;
