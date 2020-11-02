import React from "react";

function LoginForm() {
  return (
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
  );
}

function LoginLayout() {
  return (
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex
          ratione. Aliquid!
        </p>
        <button className="btn transparent" id="sign-up-btn">
          Sign up
        </button>
      </div>
      <img src="img/log.svg" className="image" alt="login" />
    </div>
  );
}

export { LoginForm, LoginLayout };
