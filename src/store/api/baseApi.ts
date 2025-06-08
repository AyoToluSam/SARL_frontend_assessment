import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "./authApi";
import { setSessionExpired } from "../../store/app/global/sessionExpiredSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    const accessToken = "";

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (
    result.error &&
    (result.error.data as { message?: string })?.message?.includes(
      "Unauthenticated"
    )
  ) {
    api.dispatch(setSessionExpired());
  }

  return result;
};

const baseApi = createApi({
  reducerPath: "base",
  baseQuery: baseQueryInterceptor,

  tagTypes: [],
  endpoints: () => ({}),
});

export default baseApi;
