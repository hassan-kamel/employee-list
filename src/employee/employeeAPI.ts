// employeeApi.ts
import axios, { AxiosResponse } from "axios";

// Import the Employee interface
import { IEmployee } from "./models/employee.interface";
import { ApiParameters } from "./models/employee-list-parameters.interface";

// Define the base URL of your API
const BASE_URL = "https://65d0d9b3ab7beba3d5e3c98f.mockapi.io/";

// Define the API endpoint for employees
const EMPLOYEE_ENDPOINT = "/employee";

// Helper function to handle Axios responses
const handleResponse = <T>(response: AxiosResponse<T>): T => response.data;

// API methods for CRUD operations on employees
export const getAllEmployees = (
  apiParameters: ApiParameters
): Promise<IEmployee[]> =>
  axios
    .get<IEmployee[]>(`${BASE_URL}${EMPLOYEE_ENDPOINT}`, {
      params: apiParameters,
    })
    .then(handleResponse);

export const getEmployeeById = (id: string): Promise<IEmployee> =>
  axios
    .get<IEmployee>(`${BASE_URL}${EMPLOYEE_ENDPOINT}/${id}`)
    .then(handleResponse);

export const addEmployee = (newEmployee: IEmployee): Promise<IEmployee> =>
  axios
    .post<IEmployee>(`${BASE_URL}${EMPLOYEE_ENDPOINT}`, newEmployee)
    .then(handleResponse);

export const updateEmployee = (
  id: string,
  updatedEmployee: IEmployee
): Promise<IEmployee> =>
  axios
    .put<IEmployee>(`${BASE_URL}${EMPLOYEE_ENDPOINT}/${id}`, updatedEmployee)
    .then(handleResponse);

export const deleteEmployee = (id: string): Promise<void> =>
  axios
    .delete<void>(`${BASE_URL}${EMPLOYEE_ENDPOINT}/${id}`)
    .then(handleResponse);
