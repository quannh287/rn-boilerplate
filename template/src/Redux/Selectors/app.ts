import { RootState } from '@Redux/allReducers';

export const selectAppConfig = (state: RootState) => state.app;
export const selectAppToken = (state: RootState) => state.app.token;
