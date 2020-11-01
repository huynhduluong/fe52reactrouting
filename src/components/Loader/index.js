import React from "react";
import styled from "styled-components";
import "./style.css";

// const Loading = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%) rotate(45deg);
//   width: 100px;
//   height: 100px;
//   background: transparent;
// `;

export default function Loader() {
  return (
    <div className="background__loader">
      <div className="loader">
      {/* <Loading> */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      {/* </Loading> */}
      </div>
    </div>
  );
}
