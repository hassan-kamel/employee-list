import * as React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";

const EmployeeList = React.lazy(() => import("./pages/EmployeeList"));
const EmployeeForm = React.lazy(() => import("./pages/EmployeeForm"));

const EmployeeRouts = () => {
  return (
    <Routes>
      <Route index element={<EmployeeList />} />
      <Route
        path="create"
        element={
          <React.Suspense fallback={<>...</>}>
            <EmployeeForm />
          </React.Suspense>
        }
      />
      <Route
        path="edit/:id"
        element={
          <React.Suspense fallback={<>...</>}>
            <EmployeeForm />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default EmployeeRouts;
