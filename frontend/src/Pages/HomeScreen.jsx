import { Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

// import products from '../products';
import ProductCard from "../Components/Product/ProductCard";
import { useGetAllProductsQuery } from "../Redux/slice/productsApiSlice.js";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import PaginationComponent from "../Components/PaginationComponent";
import ProductCarousel from "../Components/Product/ProductCarousel";
import Meta from "../Components/Meta";


const HomeScreen = () => {
  const {pageNumber, keyword} = useParams();
  const { data, isLoading, error } = useGetAllProductsQuery({keyword, pageNumber});
  return (
    <>
    {!keyword ? (
    <ProductCarousel/>
    ) : (
      <Link to="/" className="btn btn-light mb-2">Go Back</Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
        <Meta title="Products"/>
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
            keyword={ keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
