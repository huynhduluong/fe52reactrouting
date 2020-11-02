import React, { Component } from "react";
import { LoginForm, LoginLayout } from "./Login";
import "./login.css";
import { SignUpForm, SignUpLayout } from "./SignUp";
import WithLogin from "./WithLogin";

const LayoutFormLogin = WithLogin(LoginForm, LoginLayout, "");
const LayoutFormSignUp = WithLogin(SignUpForm, SignUpLayout, "sign-up-mode");

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appear: true,
    };
  }
  render() {
    return (
      <div>
        {/* <LayoutFormLogin /> */}
        <LayoutFormSignUp />
      </div>
    );
  }
}
