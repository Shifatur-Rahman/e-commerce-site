import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import share from "../../asset/images/product_two.jpg";

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='services '>
          <h2 className='productHeadTitle'>Our Products</h2>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      শাড়ি
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      বোরকা
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      ত্রি-পিস
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      মেকাপ
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      শার্ট
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      প্যান্ট
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      ব্লেজার
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className='itemCard text-center'>
                <Card.Img variant='top' className='productImg' src={share} />
                <Card.Body className='productOneMargin'>
                  <Button variant='info' size='md'>
                    <Link to='/sharee' className='itemButton'>
                      {" "}
                      পাঞ্জাবি
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
