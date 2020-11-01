import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./constant";

export const actAuthApi = () => {
  //username: dpnguyen password:123456
};
export const actLoginRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};
export const actLoginSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};
export const actLoginFailed = (err) => {
  return {
    type: AUTH_FAILED,
    payload: err,
  };
};
