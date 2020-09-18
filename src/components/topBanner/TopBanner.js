import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBanner p-0'>
          <div className='topBannerOverlay'>
            <Container className='topContent'>
              <Row>
                <Col className='text-center'>
                  <h1 className='title'>Apparel 360</h1>
                  <p className='subTitle'>Lets Together</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
