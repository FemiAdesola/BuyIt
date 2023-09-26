import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";
import {
  Row, Col, Image, ListGroup, Card, Button, Form,
} from "react-bootstrap";
import axios from 'axios';
// import products from "../products";
import ProductRating from '../Components/Product/ProductRating';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState([]);
  // const product = products.find((p) => p._id === Number(productId));
   useEffect(() => {
     const getProduct = async (products) => {
       const { data } = await axios.get(`/api/v1/products/${productId}`);
       setProduct(data);
     };
     getProduct();
   }, [productId]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <ProductRating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>€{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen