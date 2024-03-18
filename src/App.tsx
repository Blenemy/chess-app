import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { PrivateRoutes } from "./components/PrivateRoutes/PrivateRoutes";
import { Home } from "./pages/homepage/Home";
import { routes } from "./routes/config";
import { PersonalAccount } from "./pages/personal-account/PersonalAccount";

function App() {
  return (
    <div className="App">
      123
      <Link to={routes.login}>Login</Link>
      <Link to={routes.home}>Home Page</Link>
      <Link to={routes.personalAccount}>Personal Account</Link>
      <div>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path={routes.home} />
            <Route
              element={<PersonalAccount />}
              path={routes.personalAccount}
            />
          </Route>
          <Route element={<Login />} path={routes.login} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
