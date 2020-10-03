import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import sharee_one from "../../asset/images/sharee_one.jpg";
import { FiEye } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class AllSharee extends Component {
  render() {
    return (
      <Fragment>
        <Container className='services'>
          <h2 className='productHeadTitle'>Our Products</h2>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Link to='/productdetails'>
                {" "}
                <div className='product-top'>
                  <Card.Img
                    variant='top'
                    className='sharee_one'
                    src={sharee_one}
                  />

                  <div className='overlay'>
                    <Button
                      type='button'
                      className='btn btn-warning'
                      title='Add to Cart'
                    >
                      <FiEye className='cartIcon' />
                    </Button>
                    <Button
                      type='button'
                      className='btn btn-warning'
                      title='Add to Cart'
                    >
                      <BsHeart className='cartIcon' />
                    </Button>

                    <Button
                      type='button'
                      className='btn btn-warning'
                      title='Add to Cart'
                    >
                      <FaShoppingCart className='cartIcon' />
                    </Button>
                  </div>
                </div>
              </Link>
              
              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='product-top'>
                <Card.Img
                  variant='top'
                  className='sharee_one'
                  src={sharee_one}
                />
                <div className='overlay'>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FiEye className='cartIcon' />
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <BsHeart className='cartIcon' />
                  </Button>

                  <Button
                    type='button'
                    className='btn btn-warning'
                    title='Add to Cart'
                  >
                    <FaShoppingCart className='cartIcon' />
                  </Button>
                </div>
              </div>

              <div className='product-bottom text-center'>
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <AiFillStar className='starIcon' />
                <FiStar className='starIcon' />
                <h5>Half Silk Sharee</h5>
                <h5>BDT 800</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

{
  /* <Card>
                <Card.Img variant='top' src={sharee_one} />
                <Card.Body className='text-center'>
                  <h5 className="productTitle">সারা সিল্ক শাড়ি</h5>
                  <p>Code: SK55</p>
                  <p>৳ 850</p>
                </Card.Body>
              </Card> */
}
