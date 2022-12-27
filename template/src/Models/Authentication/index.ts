export type FormLoginType = {
  email: string;
  password: string;
};

export interface AuthenticationState {
  loading: boolean;
}

export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
