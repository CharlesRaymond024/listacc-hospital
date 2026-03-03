import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../../providers/AuthProvider";
import { useContext } from "react";

const RequireAuth = ({ role }) => {
  const { auth } = useContext(AuthContext);

  return auth.role === role ? (
    <Outlet />
  ) : auth.user ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
};

export default RequireAuth;
