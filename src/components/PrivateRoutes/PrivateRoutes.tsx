// import "./PrivateRoutes.scss";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // TODO: change when actual auth is implemented
  const auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
