import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PaginationComponent = ({ pages, page,isOrderList, isAdmin = false, keyword=""}) => {
  return (
    pages > 1 && (
  <Pagination>
    {[...Array(pages).keys()].map((x) => {
      let link;

      if (isAdmin) {
        // if admin and you're on order list, go to orderlist
        link = isOrderList
          ? `/admin/orderlist/${x + 1}`
          : `/admin/productlist/${x + 1}`;
      } else {
        // if not admin, go to normal product/search pages
        link = keyword
          ? `/search/${keyword}/page/${x + 1}`
          : `/page/${x + 1}`;
      }

      return (
        <LinkContainer key={x + 1} to={link}>
          <Pagination.Item active={x + 1 === page}>
            {x + 1}
          </Pagination.Item>
        </LinkContainer>
      );
    })}
  </Pagination>
)
  )
}

export default PaginationComponent