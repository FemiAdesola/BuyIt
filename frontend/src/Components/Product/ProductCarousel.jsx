import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

import Message from "../Message";
import { useGetProductsAtTopQuery } from "../../Redux/slice/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetProductsAtTopQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-3">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.title}
              className="w-100 carousel-image"
            />
            <Carousel.Caption className="carousel-caption">
              <h2 className="text-white text-right">
                {product.title} (€{product.price.toLocaleString()})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
