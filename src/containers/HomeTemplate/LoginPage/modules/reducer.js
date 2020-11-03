const { CHANGE_LAYOUT_FORM } = require("./constant");

const initialState = {
  loginFormStatus: false, //true đã có tài khoản --> form sign in
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT_FORM:
      let { loginFormStatus } = state;
      state.loginFormStatus = !loginFormStatus;
      return { ...state };

    default:
      return { ...state };
  }
};

export default loginUserReducer;
