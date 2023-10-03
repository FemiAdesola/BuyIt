import { PRODUCTS_URL } from "../../common/constants";
import { apiSlice } from "./apiSlice";

export const reviewsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
    useCreateReviewMutation,
  } = reviewsApiSlice;