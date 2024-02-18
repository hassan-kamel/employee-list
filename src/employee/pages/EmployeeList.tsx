import { Box } from "@mui/material";
import EmployeeFilters from "../components/EmployeeFilters";
import EmployeeTable from "../components/EmployeeTable";
const EmployeeList = () => {
  return (
    <>
      <Box>
        <EmployeeFilters />
        <EmployeeTable />
      </Box>
    </>
  );
};

export default EmployeeList;
