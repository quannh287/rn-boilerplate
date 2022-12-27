export enum SLICE_NAME {
  APP = 'App',
  AUTHENTICATION = 'AUTHENTICATION_',
  PROFILE = 'PROFILE',
}

export const AUTH_ACTIONS = {
  LOGIN: `${SLICE_NAME.AUTHENTICATION}LOGIN`,
  REGISTER: `${SLICE_NAME.AUTHENTICATION}REGISTER`,
};
