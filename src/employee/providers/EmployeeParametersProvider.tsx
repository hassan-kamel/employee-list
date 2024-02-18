// context/EmployeeParametersContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { ApiParameters } from "../models/employee-list-parameters.interface";
import { useLocation, useSearchParams } from "react-router-dom";
import { Chip } from "@mui/material";

// Define the context type
export interface EmployeeParametersContextType {
  employeeParameters: ApiParameters;
  setEmployeeParameters: (employeeParameters: Partial<ApiParameters>) => void;
}

// Create the initial state
const initialParameters: ApiParameters = {
  page: 1,
  limit: 10,
  search: null,
  filter: null,
  createdAt: null,
  name: null,
  job_title: null,
  address: null,
  department: null,
  sortBy: null,
  orderBy: null,
  order: "asc",
};

// Create the context
export const EmployeeParametersContext = createContext<
  EmployeeParametersContextType | undefined
>(undefined);

// Create the EmployeeParametersProvider component
export const EmployeeParametersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const [parameters, setParameters] =
    useState<ApiParameters>(initialParameters);

  useEffect(() => {
    let params: {
      [k: string]: string | number;
    } = {};
    searchParams.forEach((value, key) => {
      params[key] = key === "page" || key === "limit" ? +value : value;
    });
    setParameters(params as any);
    console.log("params: ", params);

    return () => {};
  }, [location]);

  const setEmployeeParameters = (
    employeeParameters: Partial<ApiParameters>
  ) => {
    setParameters({ ...parameters, ...employeeParameters });
  };

  return (
    <EmployeeParametersContext.Provider
      value={{ employeeParameters: parameters, setEmployeeParameters }}
    >
      {children}
    </EmployeeParametersContext.Provider>
  );
};
