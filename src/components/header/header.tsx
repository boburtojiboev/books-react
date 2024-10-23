import {
  Box,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";

export function Header(props: any) {
  const history = useHistory();
  return (
    <div className="format home_navbar">
      <Container className="zor">
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Stack
            style={{ cursor: "pointer" }}
            flexDirection={"row"}
            onClick={() => history.push("/")}
          >
            <h1
              className="shoekershop"
              style={{
                marginTop: "0px",
                color: "#ffffff",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#2ec3da" }}>Books</span>Shop
            </h1>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="underline">
                Home
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/books" activeClassName="underline">
                Books
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/create" activeClassName="underline">
                Create
              </NavLink>
            </Box>

            <Box className="login">
              <Button
                variant="contained"
                style={{
                  width: "80px",
                  color: "#ffffff",
                  background: "#0383a3",
                }}
              >
                Login
              </Button>
            </Box>

            <Box className="login">
              <Button
                variant="contained"
                style={{
                  width: "100px",
                  color: "#ffffff",
                  background: "#0383a3",
                }}
                onClick={props.handleSignupOpen}
              >
                Sign Up
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
