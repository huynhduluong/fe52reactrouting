import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "../../components/NavbarHome";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return <Route {...props} render={(propsComponent) => <div>
      <HomeLayout>
          <Component {...propsComponent} />
      </HomeLayout>
  </div>} />;
}
