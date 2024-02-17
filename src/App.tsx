import { Route, Routes } from "react-router-dom";
import * as React from "react";
import Layout from "./Layout";
import NotFound from "./components/NotFound";
import Home from "./Home";

const EmployeeRoutes = React.lazy(() => import("./employee/routes"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="employee/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <EmployeeRoutes />
            </React.Suspense>
          }
        />
        {/* <Route
        path="dashboard/*"
        element={
          <React.Suspense fallback={<>...</>}>
            <Dashboard />
          </React.Suspense>
        }
      /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
