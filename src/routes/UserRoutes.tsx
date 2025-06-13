import Dashboard from "@/pages/Dashboard";
import { Route } from "react-router";
import { Fragment } from "react/jsx-runtime";

const UserRoutes = () => {
  return (
    <Fragment>
      <Route path="dashboard" key="dashboard" element={<Dashboard />} />
      <Route path="units" key="units" element={<h1>Unit Setup</h1>} />
      <Route
        path="customer-group"
        key="customer-group"
        element={<h1>Customer Group</h1>}
      />
      <Route
        path="customer-setup"
        key="customer-setup"
        element={<h1>Customer Setup</h1>}
      />
      <Route path="users" key="users" element={<h1>Users</h1>} />
      <Route
        path="workflow-setup"
        key="workflow-setup"
        element={<h1>Workflow Setup</h1>}
      />
    </Fragment>
  );
};

export default UserRoutes;
