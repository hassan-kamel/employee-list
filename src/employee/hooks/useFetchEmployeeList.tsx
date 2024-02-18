import { useEffect, useState } from "react";
import { IEmployee } from "../models/employee.interface";
import { getAllEmployees } from "../employeeAPI";
import { ApiParameters } from "../models/employee-list-parameters.interface";

interface IFetchEmployees {
  apiParameters: ApiParameters;
}

const useFetchEmployeeList = ({ apiParameters }: IFetchEmployees) => {
  const [employees, setEmployees] = useState<IEmployee[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getEmployeesList = async () => {
      setIsLoading(true);
      try {
        const employees = await getAllEmployees(apiParameters);
        setEmployees(employees);
        setIsLoading(false);
        setError(null);
        setIsError(false);
      } catch (error) {
        setError(error);
        setIsError(true);
      }
    };
    getEmployeesList();
  }, [apiParameters]);

  return { data: employees, isLoading, isError, error };
};

export default useFetchEmployeeList;
