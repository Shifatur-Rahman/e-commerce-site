import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBannerPage p-0'>
          <div className='topBannerOverlayPage'>
            <Container className='topContentPage'>
              <Row>
                <Col className='text-center'>
                  <h3 className='subTitlePage'>{this.props.title}</h3>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
