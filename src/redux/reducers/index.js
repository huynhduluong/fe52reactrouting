import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "./../../containers/HomeTemplate/DetailPage/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";
import loginUserReducer from "./../../containers/HomeTemplate/LoginPage/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  loginUserReducer,
});

export default rootReducer;
