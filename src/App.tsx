import { Outlet, Route, Routes } from "react-router";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import UserLayout from "./layout/UserLayout";
import RouteWrapper from "./routes/RouteWrapper";
import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import NotFound from "./components/global/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>{AuthRoutes()}</Route>

      <Route element={<ProtectedRoutes />}>
        <Route element={<UserLayout />}>
          <Route
            element={
              <RouteWrapper>
                <Outlet />
              </RouteWrapper>
            }
          >
            {UserRoutes()}
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound type="app" />} />
    </Routes>
  );
}

export default App;
