import { PRODUCTS_URL } from "../../common/constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 4,
    }),
    getProductDetails: builder.query ({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 4,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailsQuery } = productsApiSlice;