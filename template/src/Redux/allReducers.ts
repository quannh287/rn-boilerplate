import { combineReducers } from '@reduxjs/toolkit';
import { authenticationReducer } from '@Redux/Slices/authentication';
import { appReducer } from '@Redux/Slices/app';
import { api } from '@Network/api';

export const allReducer = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof allReducer>;
