import { Outlet, Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath }) {
  return !user ? <Outlet /> : <Navigate to={loggedInPath} />;
}

export function ProtectedRoute({ user }) {
  return user ? <Outlet /> : <Navigate to="/signin" />;
}
