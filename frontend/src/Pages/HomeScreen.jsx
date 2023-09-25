import React, {useState, useEffect }  from 'react'
import { Row, Col } from "react-bootstrap";
import axios from "axios";

// import products from '../products';
import ProductCard from '../Components/Product/ProductCard';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async (products) => {
      const { data } = await axios.get("/api/v1/products")
      setProducts(data)
    };
    getProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen