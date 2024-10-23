import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardOverflow,
  Typography,
  IconButton,
  AspectRatio,
  Link,
  CssVarsProvider,
} from "@mui/joy";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);
const product_list = Array.from(Array(10).keys());

export function AllBooks() {
  return (
    <div className="single_shop">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar_big_box"}>
            <Box className={"top_text"}>
              <h2>Book List</h2>
            </Box>
          </Stack>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            width={"100%"}
          >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Sorting
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Price"
                  control={<Radio />}
                  label="Price"
                />
                <FormControlLabel
                  value="BookName"
                  control={<Radio />}
                  label="BookName"
                />
                <FormControlLabel
                  value="AuthorName"
                  control={<Radio />}
                  label="AuthorName"
                />
                <FormControlLabel
                  value="NewComing"
                  control={<Radio />}
                  label="NewComing"
                />
              </RadioGroup>
            </FormControl>
            <div style={{width: "400px", "height": "65px", justifyContent: "center", alignItems: "center", display: "flex"}}>
              <Box className={"Single_search_big_box"}>
                <form className={"Single_search_form"} action={""} method={""}>
                  <input
                    type="search"
                    className="Single_searchInput"
                    name="Single_resSearch"
                    placeholder="search"
                  />
                  <Button
                    className="Single_button_search"
                    variant="contained"
                    endIcon={<SearchIcon />}
                  >
                    find
                  </Button>
                </form>
              </Box>
            </div>
          </Stack>
          <Stack className={"single_shop_box"}>
            <CssVarsProvider>
              {product_list.map((ele) => {
                return (
                  <Card
                    className="img_cart"
                    variant="outlined"
                    sx={{ minHeight: 280, minWidth: 220 }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={"/shops/sneakers.jpg"} alt="" />
                      </AspectRatio>

                      <IconButton
                        aria-label="Like minimal phtography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        className="like_hover"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.2)",
                        }}
                      >
                        <DeleteIcon style={{ color: "white" }} />
                      </IconButton>
                      <IconButton
                        aria-label="Like minimal phtography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        className="like_hover"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          top: 43,
                          borderRadius: "50%",
                          right: "1rem",
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.2)",
                        }}
                      >
                        <EditIcon style={{ color: "white" }} />
                      </IconButton>
                      <IconButton
                        aria-label="Like minimal phtography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        className="like_hover"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          top: 85,
                          borderRadius: "50%",
                          right: "1rem",
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.2)",
                        }}
                      >
                        <LocalMallIcon style={{ color: "white" }} />
                      </IconButton>
                    </CardOverflow>
                    <Typography
                      level="h3"
                      sx={{ fontSize: "md", lineHeight: "10px", mt: "1" }}
                    >
                      BookName
                    </Typography>
                    <Typography
                      level="h3"
                      sx={{ fontSize: "md", lineHeight: "10px", mt: "1" }}
                    >
                      Author
                    </Typography>
                    <Typography level="body-md" sx={{ lineHeight: "10px" }}>
                      <Link
                        href=""
                        startDecorator={<AttachMoneyIcon />}
                        textColor="neutral.700"
                      >
                        Price
                      </Link>
                    </Typography>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
          <Stack className="bottom_box">
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color="secondary"
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}