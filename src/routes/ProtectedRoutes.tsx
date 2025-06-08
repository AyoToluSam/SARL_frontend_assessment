import { Navigate, Outlet, useLocation } from "react-router";
import { toast } from "react-toastify";

const ProtectedRoutes = () => {
  const location = useLocation();

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    toast.error("Active session not found. Please Login to continue.", {
      toastId: "NOT_LOGGED_IN",
    });

    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }
};

export default ProtectedRoutes;
