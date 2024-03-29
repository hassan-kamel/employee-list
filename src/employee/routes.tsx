import * as React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import { EmployeeProvider } from "./providers/EmployeeProvider";
import { EmployeeParametersProvider } from "./providers/EmployeeParametersProvider";

const EmployeeList = React.lazy(() => import("./pages/EmployeeList"));
const EmployeeForm = React.lazy(() => import("./pages/EmployeeForm"));

const EmployeeRouts = () => {
  return (
    <EmployeeProvider>
      <EmployeeParametersProvider>
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
      </EmployeeParametersProvider>
    </EmployeeProvider>
  );
};

export default EmployeeRouts;
