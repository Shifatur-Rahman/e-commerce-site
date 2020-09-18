import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='services'>
          <h2 className='productHeadTitle'>Our Products</h2>
          <Row>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className='productCard'>
              <Card className='productOne'>
                <Container className='productOneMargin'>
                  <Row>
                    <Col className='text-center'>
                      <Button variant='info' size='lg'>
                        শাড়ি
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
