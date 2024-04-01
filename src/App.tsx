import { Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes/config";

import MotionWrapper from "./components/MotionWrapper/MotionWrapper";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import PersonalAccount from "./pages/personal-account/PersonalAccount";
import Login from "./components/Login/Login";
import Home from "./pages/homepage/Home";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <MotionWrapper>
        <Container>
          <Header />
          <section>
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
          </section>
        </Container>
      </MotionWrapper>
    </div>
  );
}

export default App;
