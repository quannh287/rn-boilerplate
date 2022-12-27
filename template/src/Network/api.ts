import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@Config/index';

export const endPoints = {
  LOGIN: '/auth/login',
  USERS: '/users',
};

export const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
