import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangeLayoutForm } from "./modules/action";

class LoginForm extends Component {
  render() {
    return (
      <>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn solid">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  this.props.handleChangeStatus();
                }}
              >
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="login" />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeStatus: () => {
      dispatch(actChangeLayoutForm());
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
