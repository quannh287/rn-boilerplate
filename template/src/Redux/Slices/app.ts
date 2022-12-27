import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, AppThemeMode } from '@Models/App';
import { SLICE_NAME } from '@Redux/utils';

const initialState: AppState = {
  internetState: true,
  loadingApp: false,
  showDialog: false,
  theme: AppThemeMode.LIGHT,
};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialState,
  reducers: {
    setInternetState: (state, { payload }: PayloadAction<boolean>) => {
      state.internetState = payload;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
