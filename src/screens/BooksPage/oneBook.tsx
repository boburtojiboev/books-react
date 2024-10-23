import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { setChosenProduct } from "./slice";
import { retrieveChosenProduct } from "./selector";
import { Product } from "../../types/product";
import ProductApiService from "../../app/asiService/productApiService";
import { serverApi } from "../../lib/config";

// REDUX SELECTOR
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);

export function OneBook(props: any) {
  // INITIALIZATIONS
  const history = useHistory();
  const { product_id } = useParams<{ product_id: string }>();
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const dispatch = useDispatch();
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const productRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenProduct(
        product_id
      );
      dispatch(setChosenProduct(product));
    } catch (err) {
      console.log(`productRelatedProcess ERROR:`, err);
    }
  };

  // HANDLERS
  useEffect(() => {
    if (product_id) {
      productRelatedProcess();
    } else {
      console.error("Product ID is undefined.");
    }
  }, [product_id, productRebuild]);

  return (
    <div className="chosen_product_page">
      <Container className="product_container">
        {chosenProduct?.product_images?.map((ele: string) => {
          const image_path = `${serverApi}/${ele}`;
          return (
            <img
              key={ele}
              src={image_path}
              className="img_selected"
              alt="product"
            />
          );
        })}

        <Stack className="chosen_product_info_container">
          <Box className="chosen_product_info_box">
            <span className="shop_name">
              Book name: {chosenProduct?.product_name}
            </span>
            <span className="shop_name">
              Author: {chosenProduct?.product_author}
            </span>
            <span className="shop_name">
              Quantity sold: {chosenProduct?.product_sold_cnt}
            </span>
            <div className="product_desc_bottom">
              <div className="bottom_price">
                <div className="pro_price_box">
                  <span>Price: </span>
                  <span>{chosenProduct?.product_price} won</span>
                </div>
                <div className="bottom_box">
                  <Button
                    style={{ backgroundColor: "#f0b512" }}
                    variant="contained"
                    onClick={() => {
                      props.onAdd(chosenProduct);
                    }}
                  >
                    Add to box
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
