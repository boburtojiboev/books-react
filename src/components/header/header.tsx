import { Logout } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../app/asiService/verify";
import { Basket } from "./basket";

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
            <Basket
              cartItems={props.cartItems}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              onDelete={props.onDelete}
              onDeleteAll={props.onDeleteAll}
              setOrderRebuild={props.setOrderRebuild}
            />

            {!verifiedMemberData ? (
              <Box>
                <Button
                  variant="contained"
                  style={{
                    width: "100px",
                    color: "#ffffff",
                    background: "#0383a3",
                  }}
                  onClick={props.handleLoginOpen}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                style={{ width: "48px", height: "48px", borderRadius: "24px" }}
                src={
                  verifiedMemberData.mb_image
                    ? verifiedMemberData.mb_image
                    : "/auth/default_user.svg"
                }
                alt="member_img"
                onClick={props.handleLogOutClick}
              />
            )}
            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px, 2px, 8px, rgba(0, 0, 0, 0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={props.handleLogOutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>

            {!verifiedMemberData ? (
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
            ) : null}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
