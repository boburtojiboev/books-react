import React from "react";
import { CardOverflow, IconButton } from "@mui/joy";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import {Container, Stack } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  AspectRatio,
  Link,
} from "@mui/joy";

export function BestBooks() {
  return (
    <div className="best_product_frame">
      <Container sx={{ mt: "20px", mb: "40px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <h1 className="category_title">Best Books</h1>
          <Stack
            sx={{ gap: "40px" }}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <CssVarsProvider>
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
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}