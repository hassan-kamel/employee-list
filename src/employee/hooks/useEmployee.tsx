import { useContext } from "react";
import {
  EmployeeContext,
  EmployeeContextType,
} from "../providers/EmployeeProvider";

const useEmployeeContext = (): EmployeeContextType => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      "useEmployeeContext must be used within an EmployeeProvider"
    );
  }
  return context;
};

export default useEmployeeContext;
