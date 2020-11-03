import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangeLayoutForm } from "./modules/action";

class SignUpForm extends Component {
  render() {
    return (
      <>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn ">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  this.props.handleChangeStatus();
                }}
              >
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="signup" />
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

export default connect(null, mapDispatchToProps)(SignUpForm);
