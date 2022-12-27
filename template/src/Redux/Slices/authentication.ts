import { createAction, createSlice } from '@reduxjs/toolkit';
import { AUTH_ACTIONS, SLICE_NAME } from '@Redux/utils';
import { AuthenticationState } from '@Models/Authentication';

const initialState: AuthenticationState = {
  loading: false,
};

const authenticationSlice = createSlice({
  name: SLICE_NAME.AUTHENTICATION,
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
});

const login = createAction(
  AUTH_ACTIONS.LOGIN,
  (body: any, onSucceeded: () => void, onFailure: (msg: string) => void) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

export const authenticationActions = { ...authenticationSlice.actions, login };
export const authenticationReducer = authenticationSlice.reducer;
