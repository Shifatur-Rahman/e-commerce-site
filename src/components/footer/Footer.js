import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='footer'>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <h4 className='footerHeader'>About Apparel 360</h4>
              <p className='apparelDes'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <h4 className='footerHeader'>Contact us</h4>
              <p>
                <BiPhone /> +88 01921 601608
              </p>
              <p>
                {" "}
                <AiOutlineMail /> info@apparel360.com
              </p>
              <p>
                {" "}
                <CgWebsite /> www.apparel360.com
              </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <h4 className='footerHeader'>Connect With us</h4>
              <p>
                <FaFacebook className='connectIconFa' /> apparel@facebook
              </p>
              <p>
                <AiOutlineYoutube className='connectIconYou' /> apparel@facebook
              </p>
              <p>
                <RiWhatsappFill className='connectIconWhatsApp' />{" "}
                apparel@facebook
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
