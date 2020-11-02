import React from "react";

export default function WithLogin(ComponentForm, ComponentLayout, status) {
  return function () {
    return (
      <div className={`background__container ${status}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <ComponentForm />
          </div>
        </div>
        <div className="panels-container">
          <ComponentLayout />
        </div>
      </div>
    );
  };
}
