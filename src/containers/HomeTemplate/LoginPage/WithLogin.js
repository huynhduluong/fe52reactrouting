import React from "react";

export default function WithLogin(Component, status) {
  return function () {
    return (
      <div className={`loginPage__container ${status}`}>
        <Component />
      </div>
    );
  };
}

