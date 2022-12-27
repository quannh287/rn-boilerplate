import { api, endPoints } from '@Network/api';
import { ILoginParams, ILoginResponse } from '@Models/Authentication';

const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginParams>({
      query: (body) => ({
        url: `${endPoints.LOGIN}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
