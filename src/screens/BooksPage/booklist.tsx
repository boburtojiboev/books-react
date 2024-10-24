import React, { useEffect, useRef, useState } from "react";
// REDUX
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { retrieveAllProducts } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../types/product";
import { useHistory } from "react-router-dom";
import { AllProductsSearchObj } from "../../types/others";
import ProductApiService from "../../app/asiService/productApiService";
import { setAllProducts } from "./slice";
import { serverApi } from "../../lib/config";
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
import { sweetTopSmallSuccessAlert } from "../../lib/sweetAlert";

SwiperCore.use([Autoplay, Navigation, Pagination]);

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setAllProducts: (data: Product[]) => dispatch(setAllProducts(data)),
});
// REDUX SELECTOR
const allProductsRetriever = createSelector(
  retrieveAllProducts,
  (allProducts) => ({
    allProducts,
  })
);

export function AllBooks(props: any) {
  // INITIALIZATIONS
  const history = useHistory();
  const refs: any = useRef([]);
  const { setAllProducts } = actionDispatch(useDispatch());
  const { allProducts } = useSelector(allProductsRetriever);
  const [allProductSearchObj, setAllProductSearchObj] =
    useState<AllProductsSearchObj>({
      page: 1,
      limit: 10,
      order: "product_price",
    });
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  // New state for search query
  const [searchQuery, setSearchQuery] = useState("");

  const productService = new ProductApiService();

  useEffect(() => {
    productService
      .getAllProducts(allProductSearchObj)
      .then((data) => setAllProducts(data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProductSearchObj, productRebuild]);

  /** HANDLERS */
  const searchOrderHandler = (order: string) => {
    allProductSearchObj.page = 1;
    allProductSearchObj.order = order;
    setAllProductSearchObj({ ...allProductSearchObj });
  };

  const chosenProductHandler = (id: string) => {
    history.push(`/books/${id}`);
  };

  const handlePaginationChange = (event: any, value: number) => {
    allProductSearchObj.page = value;
    setAllProductSearchObj({ ...allProductSearchObj });
  };

  const handleDeleteProduct = async (product_id: string) => {
    try {
      await productService.deleteProduct(product_id);

      await sweetTopSmallSuccessAlert("successfully deleted", 700, false);
      setProductRebuild(new Date());
    } catch (err) {
      console.log(err);
    }
  };

  // New handler for search input change
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  // Filtered products based on search query
  const filteredProducts = allProducts.filter(
    (product: Product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.product_author.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  value="product_price"
                  control={<Radio />}
                  label="Price"
                  onClick={() => searchOrderHandler("product_price")}
                />
                <FormControlLabel
                  value="product_name"
                  control={<Radio />}
                  label="Book Name"
                  onClick={() => searchOrderHandler("product_name")}
                />
                <FormControlLabel
                  value="product_author"
                  control={<Radio />}
                  label="Author Name"
                  onClick={() => searchOrderHandler("product_author")}
                />
                <FormControlLabel
                  value="CreatedAt"
                  control={<Radio />}
                  label="New Coming"
                  onClick={() => searchOrderHandler("CreatedAt")}
                />
              </RadioGroup>
            </FormControl>
            <div
              style={{
                width: "400px",
                height: "65px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box className={"Single_search_big_box"}>
                <form className={"Single_search_form"} action={""} method={""}>
                  <input
                    type="search"
                    className="Single_searchInput"
                    name="Single_resSearch"
                    placeholder="search"
                    value={searchQuery}
                    onChange={handleSearchInputChange} // Add onChange handler
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
              {filteredProducts.map((product: Product) => {
                // Use filteredProducts for rendering
                const image_path = `${serverApi}/${product.product_images[0]}`;
                return (
                  <Card
                    onClick={() => chosenProductHandler(product?._id)}
                    key={product._id}
                    className="img_cart"
                    variant="outlined"
                    sx={{ minHeight: 280, minWidth: 220 }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={image_path} alt="" />
                      </AspectRatio>

                      <IconButton
                        onClick={(e) => {
                          handleDeleteProduct(product._id);
                          e.stopPropagation();
                        }}
                        aria-label="Like minimal photography"
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
                        aria-label="Like minimal photography"
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
                        aria-label="Like minimal photography"
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
                         onClick={(e) => {
                          props.onAdd(product);
                          e.stopPropagation();
                        }}
                      >
                        <LocalMallIcon style={{ color: "white" }} />
                      </IconButton>
                    </CardOverflow>
                    <Typography fontWeight="lg" sx={{ mt: 2 }}>
                      {product.product_name}
                    </Typography>
                    <Typography
                     
                      sx={{ mb: 1, color: "text.tertiary" }}
                    >
                      {product.product_author}
                    </Typography>
                    <Typography fontWeight="lg">
                      {product.product_price} 원
                    </Typography>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
          <Pagination
            className="Pagination"
            count={Math.ceil(
              filteredProducts.length / allProductSearchObj.limit
            )} // Use filteredProducts.length for pagination count
            page={allProductSearchObj.page}
            onChange={handlePaginationChange}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  border: "none",
                }}
              />
            )}
          />
        </Stack>
      </Container>
    </div>
  );
}
