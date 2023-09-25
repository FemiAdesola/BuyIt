import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProductRating from './ProductRating';

const ProductCard = ({product}) => {
    return (
      <Card className="productcard my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} alt={product.title} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.title}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <ProductRating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3">€{product.price}</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default ProductCard