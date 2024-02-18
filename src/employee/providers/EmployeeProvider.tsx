// context/EmployeeContext.tsx
import React, { createContext, useState, ReactNode } from "react";
import { IEmployee } from "../models/employee.interface";

// Define the context type
export interface EmployeeContextType {
  employees: IEmployee[];
  addEmployee: (employee: IEmployee) => void;
  updateEmployee: (employee: IEmployee) => void;
  deleteEmployee: (id: string) => void;
}

// Create the initial state
const initialState: IEmployee[] = [];

// Create the context
export const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

// Create the EmployeeProvider component
export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<IEmployee[]>(initialState);

  const addEmployee = (employee: IEmployee) => {
    setEmployees([...employees, employee]);
  };

  const updateEmployee = (updatedEmployee: IEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const deleteEmployee = (id: string) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
