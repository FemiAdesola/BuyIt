import React from "react";
import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  FormSelect,
} from "react-bootstrap";
import { useParams, Link} from "react-router-dom";

// import products from '../products';
import ProductCard from "../Components/Product/ProductCard";
import { useGetAllProductsQuery } from "../Redux/slice/productsApiSlice.js";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import PaginationComponent from "../Components/PaginationComponent";
import ProductCarousel from "../Components/Product/ProductCarousel";
import Meta from "../Components/Meta";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  
  const { data, isLoading, error } = useGetAllProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-2">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title="Products" />
          <h1>Latest Products</h1>
          <Container>
            <Row>
              {/* <Col lg={3}>
                <Card className="shadow p-3">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h4 className="mb-2">Category</h4>
                      <FormSelect
                        defaultValue={"All"}
                        onChange={(e) => {
                          if (e.target.value === "All") {
                            // reset();
                          } else {
                            // handleCategoryClick(e.target.value);
                          }
                        }}
                      >
                        <option value="All">All</option>
                        All
                        {Array.isArray(data.products)
                          ? data.products.map((product) => (
                              <option
                                value={product.category.toLowerCase()}
                                key={product.id}
                              >
                                {product.category.toLowerCase()}
                              </option>
                            ))
                          : null}
                      </FormSelect>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col> */}
              <Col lg={10}>
                <Row>
                  {data.products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={5} xl={4}>
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
          <PaginationComponent
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
