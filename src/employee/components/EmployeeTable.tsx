import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetchEmployeeList from "../hooks/useFetchEmployeeList";
import useEmployeeParametersContext from "../hooks/useEmployeeParameters";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Avatar,
  Backdrop,
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Skeleton,
  TablePagination,
} from "@mui/material";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import NotFound from "../../components/NotFound";
import { getRandomElement } from "../../helpers/getRandomElement";
import { useLocation, useSearchParams } from "react-router-dom";

const EmployeeTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { employeeParameters, setEmployeeParameters } =
    useEmployeeParametersContext();

  const {
    data: employees,
    isLoading,
    isError,
    error,
  } = useFetchEmployeeList({
    apiParameters: employeeParameters,
  });

  if (isLoading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  if (isError) return <NotFound />;

  function handleChangePage(event: any | null, page: number): void {
    setSearchParams((search) => {
      search.set("page", "" + (+page === 0 ? 1 : +page));
      return search;
    });
  }

  function handleChangeRowsPerPage(event: any): void {
    const pageSize = event.target.value;
    setSearchParams((search) => {
      search.set("limit", pageSize);
      return search;
    });
  }

  return (
    <TableContainer component={Paper} sx={{ mb: 20 }}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees &&
            employees.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "2rem",
                    }}
                  >
                    <Avatar
                      alt={row.name}
                      src={row.avatar}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Box>{row.name}</Box>
                  </Box>
                </TableCell>
                <TableCell>{row.job_title}</TableCell>
                <TableCell>
                  <Chip
                    label={row.department}
                    color={getRandomElement([
                      "default",
                      "primary",
                      "secondary",
                      "error",
                      "info",
                      "success",
                      "warning",
                    ])}
                    size="small"
                  />
                </TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <Box>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="delete"
                      sx={{ mr: 2 }}
                    >
                      <DeleteOutline color={"error"} />
                    </IconButton>

                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="edit"
                      // sx={{ mr: 2 }}
                    >
                      <EditOutlined color={"secondary"} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={100}
        page={employeeParameters.page}
        onPageChange={handleChangePage}
        rowsPerPage={employeeParameters.limit}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default EmployeeTable;
