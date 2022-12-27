import { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import {
  CODE_SUCCESS,
  CODE_TIME_OUT,
  ERROR_NETWORK_CODE,
  RESULT_CODE_PUSH_OUT,
  STATUS_TIME_OUT,
} from '@Network/config';
import { ParamsNetwork, ResponseBase } from '@Network/type';
import { replaceAll } from '@Commons/Strings';

const responseDefault: ResponseBase<Record<string, unknown>> = {
  code: -500,
  status: false,
  msg: 'Error',
};

export const handleResponseAxios = <T = Record<string, unknown>>(res: AxiosResponse<T>): ResponseBase<T> => {
  if (res.data) {
    return { code: CODE_SUCCESS, status: true, data: res.data };
  }
  return responseDefault as ResponseBase<T>;
};
export const handleErrorAxios = <T = Record<string, unknown>>(error: AxiosError): ResponseBase<T> => {
  if (error.code === STATUS_TIME_OUT) {
    // timeout
    return handleErrorApi(CODE_TIME_OUT) as unknown as ResponseBase<T>;
  }
  if (error.response) {
    if (error.response.status === RESULT_CODE_PUSH_OUT) {
      return handleErrorApi(RESULT_CODE_PUSH_OUT) as unknown as ResponseBase<T>;
    } else {
      return handleErrorApi(error.response.status) as unknown as ResponseBase<T>;
    }
  }
  return handleErrorApi(ERROR_NETWORK_CODE) as unknown as ResponseBase<T>;
};

export const handleErrorApi = (status: number) => {
  const result = { status: false, code: status, msg: '' };
  if (status > 505) {
    result.msg = 'Server error';
    return result;
  }
  if (status < 500 && status >= 418) {
    result.msg = 'Request error';
    return result;
  }
  result.msg = `Error status: ${status}`;
  return result;
};

export const handlePath = (url: string, path: ParamsNetwork['path']) => {
  if (!path || Object.keys(path).length <= 0) {
    return url;
  }
  let resUrl = url;
  Object.keys(path).forEach((k) => {
    resUrl = replaceAll(resUrl, `{${k}}`, String(path[k]));
    resUrl = replaceAll(resUrl, `:${k}`, String(path[k]));
  });
  return resUrl;
};

export const handleParameter = <T extends ParamsNetwork>(props: T, method: Method): AxiosRequestConfig => {
  const { url, body, path, params } = props;
  return {
    ...props,
    method,
    url: handlePath(url, path),
    data: body,
    params,
  };
};
