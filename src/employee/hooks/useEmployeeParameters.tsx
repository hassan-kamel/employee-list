import { useContext } from "react";
import {
  EmployeeParametersContext,
  EmployeeParametersContextType,
} from "../providers/EmployeeParametersProvider";

const useEmployeeParametersContext = (): EmployeeParametersContextType => {
  const context = useContext(EmployeeParametersContext);
  if (!context) {
    throw new Error(
      "useEmployeeParametersContext must be used within an EmployeeParametersProvider"
    );
  }
  return context;
};

export default useEmployeeParametersContext;
