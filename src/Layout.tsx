import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import LoginAppBar from "./components/AppBar";

const Layout = () => {
  return (
    <>
      <Container maxWidth="xl">
        <LoginAppBar />
        <Box
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            paddingTop: "10vh",
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
