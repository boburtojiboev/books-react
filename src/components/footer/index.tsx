import { Box, Container, Stack } from "@mui/material";
import React from "react";
import {useHistory } from "react-router-dom";

export function Footer() {
    const history = useHistory();
  return (
    <div className="footer_config">
      <Container>
        <Stack className={"main_footer_container"}>
          <Stack
            className="main_footer"
            flexDirection={"row"}
            style={{ height: "242px" }}
          >
            <Stack flexDirection={"column"} className="info">
              <Box>
                <h2 className="shoeker_footer">BooksShop</h2>
              </Box>
              <Box className="divider"></Box>
              <Box className={"main_text"}>Your choice matter</Box>
              <Box className={"main_text"}>
                Change world with books
              </Box>
              <Stack className="contact_links">
                <Box>
                  <a href="https://github.com/boburtojiboev">
                    <img src={"/icons/facebook.svg"} alt=""/>
                  </a>
                </Box>
                <Box>
                  <a href="https://www.instagram.com/bobur_jontojiboyev/">
                    <img src={"/icons/twitter.svg"} alt=""/>
                  </a>
                </Box>
                <Box>
                  <a href="https://www.instagram.com/bobur_jontojiboyev/">
                    <img src={"/icons/instagram.svg"} alt=""/>
                  </a>
                </Box>
                <Box>
                  <a href="https://github.com/boburtojiboev">
                    <img src={"/icons/youtube.svg"} alt=""/>
                  </a>
                </Box>
              </Stack>
            </Stack>

            <Stack className="parts">
              <Box className="parts_subject">Get to know</Box>
              <Box className="divider"></Box>
              <Box className="targets">
                <pre
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/")}
                >
                  Home
                </pre>
                <pre
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/books")}
                >
                  Books
                </pre>
                <pre
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/contact")}
                >
                  Contact
                </pre>
              </Box>
            </Stack>

            <Stack className="find_us">
              <Box className="find">Find us</Box>
              <Box className="divider"></Box>
              <Stack className="details" sx={{ mt: "10px" }}>
                <Box className="detail_first">Address</Box>
                <Box className="detail_second">Seoul South Korea</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "10px" }}>
                <Box className="detail_first">Phone</Box>
                <Box className="detail_second">+821024995522</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "10px" }}>
                <Box className="detail_first">Email</Box>
                <Box className="detail_second">tbobur1995@gmail.com</Box>
              </Stack>
            </Stack>
          </Stack>
          <Box className="liner"></Box>
          <Box className="copyrights">
            Copyright BooksShop 2024, All right reserved.
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
