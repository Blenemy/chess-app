import { Link, Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes/config";

import MotionWrapper from "./components/Container/Container";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import PersonalAccount from "./pages/personal-account/PersonalAccount";
import Login from "./components/Login/Login";
import Home from "./pages/homepage/Home";

function App() {
  return (
    <div className="App">
      <MotionWrapper>
        <div>123</div>
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
      </MotionWrapper>
    </div>
  );
}

export default App;
