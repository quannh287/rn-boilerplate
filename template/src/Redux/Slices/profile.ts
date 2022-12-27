import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@Redux/utils';
import { ProfileState } from '@Models/User';

const initialState: ProfileState = {
  loading: false,
  profile: null,
};

const profileSlice = createSlice({
  name: SLICE_NAME.PROFILE,
  initialState,
  reducers: {
    setProfile: (state, { payload }: PayloadAction) => {
      state.profile = payload;
    },
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
