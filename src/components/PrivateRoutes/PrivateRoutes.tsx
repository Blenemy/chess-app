// import "./PrivateRoutes.scss";

import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  // TODO: change when actual auth is implemented
  const auth = { token: false };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
