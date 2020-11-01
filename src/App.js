import "./App.css";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import HomePage from "./containers/HomeTemplate/HomePage";
// import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import AuthPage from "./containers/AdminTemplate/AuthPage";
//BrowserRouter dùng để bao hết trang
//Route là bộ định tuyến

function App() {
  const showLayout = (routes, text) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return text === "home" ? (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        ) : (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* Trang HomePage - localhost:3000 */}
          {/* <Route exact path="/" component={HomePage} /> */}

          {/* Trang AboutPage localhost:3000/about  */}
          {/* <Route path="/about" component={AboutPage} /> */}

          {/* Trang ListMoviePage localhost:3000/list-movie  */}
          {/* <Route path="/list-movie" component={ListMoviePage} /> */}

          {showLayout(routesHome, "home")}

          {showLayout(routesAdmin, "admin")}

          <Route exact={false} path="/auth" component={AuthPage} />

          {/* Không tìm thấy, phải để cuối cùng  */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
