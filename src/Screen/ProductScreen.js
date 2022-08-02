import React from "react";
import { useParams } from "react-router-dom";
import products from "../Product-Data";
import { Row, Col, Image, Button, ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const param = useParams();
  const product = products.find((data) => data._id == param.id);
  console.log(product);
  const imgSrc = require("../images/airpods.jpg");
  return (
    <>
      <Button variant="light" className="my-2">
        Go Back
      </Button>
      <Row>
        <Col md={6}>
          <Image src={imgSrc} fluid />
        </Col>
        <Col md={3}>
            <h2>{product.name}</h2>
            <hr />
            <Rating rating={product.rating} text={product.numReviews}/>
            <hr />
            <h5>Price ${product.price}</h5>
            <span>Description : {product.description}</span>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
             
            <Row>
                <Col>Price :</Col>
                <Col>
                  ${product.price}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status :</Col>
                <Col>
                  {product.countInStock>0?'In Stock':'Out of stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block btn-dark ' type="button">Add To Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
