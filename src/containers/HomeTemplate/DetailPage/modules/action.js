import Axios from "axios";
import {
  DETAIL_PAGE_FAILED,
  DETAIL_PAGE_REQUEST,
  DETAIL_PAGE_SUCCESS,
} from "./constant";

export const actDetailApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailFailed(err));
      });
  };
};
export const actDetailRequest = () => {
  return {
    type: DETAIL_PAGE_REQUEST,
  };
};

export const actDetailSuccess = (data) => {
  return {
    type: DETAIL_PAGE_SUCCESS,
    payload: data,
  };
};

export const actDetailFailed = (err) => {
  return {
    type: DETAIL_PAGE_FAILED,
    payload: err,
  };
};
