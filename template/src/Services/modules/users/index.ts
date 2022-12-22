import fetchOne from './fetchOne'
import { api } from '@Services/api'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchOne: fetchOne(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery } = userApi
