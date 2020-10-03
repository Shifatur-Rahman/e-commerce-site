import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";
import { Nav } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='footer text-center'>
          <Row className='columnPadding'>
            <Col lg={4} md={6} sm={12}>
              <h4 className='footerHeader'>About Apparel 360</h4>
              <p className='apparelDes'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h4 className='footerHeader'>Contact us</h4>
              <p className='footerHeaderLink'>
                <BiPhone /> +88 01921 601608
              </p>
              <p className='footerHeaderLink'>
                <AiOutlineMail /> info@apparel360.com
              </p>
              <p className='footerHeaderLink'>
                <CgWebsite /> www.apparel360.com
              </p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h4 className='footerHeader'>Connect With us</h4>
              <p className='footerHeaderLink'>
                <FaFacebook className='connectIconFa' /> apparel@facebook
              </p>
              <p className='footerHeaderLink'>
                <AiOutlineYoutube className='connectIconYou' /> apparel@Youtube
              </p>
              <p className='footerHeaderLink'>
                <RiWhatsappFill className='connectIconWhats ' />
                apparel@WhatApp
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className='text-center copyRightSection'>
          <div className='footer2'>
            <FaFacebook className='connectIconFacebook' />

            <AiOutlineYoutube className='connectIconYoutube' />

            <RiWhatsappFill className='connectIconWhatsApp' />
            <AiFillTwitterSquare className='connectIconTwitter' />
          </div>
          <Nav className='justify-content-center footerNav' activeKey='/home'>
            <Nav.Item>
              <Nav.Link className='footerLowerLink' href='/home'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='footerLowerLink' eventKey='link-1'>
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='footerLowerLink' eventKey='link-2'>
                Payment Info
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='footerLowerLink' eventKey='link-2'>
                Terms & Condition
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='footerLowerLink' eventKey='link-2'>
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <p className='copyRightTitle'>
            ©Apparel 360 Wholesale Marketplace Bangladesh
          </p>
        </Container>
      </Fragment>
    );
  }
}
