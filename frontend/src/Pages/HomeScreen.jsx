import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

// import products from '../products';
import ProductCard from "../Components/Product/ProductCard";
import { useGetAllProductsQuery } from "../Redux/slice/productsApiSlice.js";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import PaginationComponent from "../Components/PaginationComponent";


const HomeScreen = () => {
  const {pageNumber} = useParams();
  const { data, isLoading, error } = useGetAllProductsQuery({pageNumber});
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <PaginationComponent
            pages={data.pages}
            page={data.page}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
