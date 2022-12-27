import { api, endPoints } from '@Network/api';
import { IFetchUserReponse } from '@Models/User';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchUsers: builder.query<IFetchUserReponse, void>({
      query: () => `${endPoints.USERS}`,
    }),
  }),
});

export const { useFetchUsersQuery } = userApi;
