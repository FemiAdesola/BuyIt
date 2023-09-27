import { Row, Col } from "react-bootstrap";
// import products from '../products';
import ProductCard from "../Components/Product/ProductCard";
import { useGetAllProductsQuery } from "../Redux/slice/productsApiSlice.js";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetAllProductsQuery();
  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
