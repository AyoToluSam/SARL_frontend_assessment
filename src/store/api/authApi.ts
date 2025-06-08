import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  tagTypes: [],
  endpoints: () => ({}),
});

export default authApi;
