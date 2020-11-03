import Axios from "axios";
import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./constant";

export const actAuthApi = (admin) => {
  //username: dpnguyen password:123456
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: admin,
    })
      .then((result) => {
        console.log(result);
        dispatch(actLoginSuccess(result.data));
      })
      .catch((err) => {
        console.log("log err: " + err);
        dispatch(actLoginFailed(err));
      });
  };
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
