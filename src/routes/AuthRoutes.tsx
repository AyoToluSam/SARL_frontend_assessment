import Login from "@/pages/Login";
import { Navigate, Route } from "react-router";
import { Fragment } from "react/jsx-runtime";

const AuthRoutes = () => {
  return (
    <Fragment>
      <Route index element={<Navigate to={"/login"} />} />
      <Route path="login" element={<Login />} />
    </Fragment>
  );
};

export default AuthRoutes;
