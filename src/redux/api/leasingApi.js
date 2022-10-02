import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leasingApi = createApi({
  reducerPath: "leasingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eoj3r7f3r4ef6v4.m.pipedream.net",
  }),
  endpoints: (build) => ({
    postFromForm: build.mutation({
      query: (formPost) => ({
        url: "",
        method: "POST",
        body: formPost,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { usePostFromFormMutation } = leasingApi;
