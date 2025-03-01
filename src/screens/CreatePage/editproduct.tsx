import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../css/productcreation.css";
import { CloudUpload } from "@mui/icons-material";
import { serverApi } from "../../lib/config";
import { useHistory, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Product, ProductInput } from "../../types/product";
import ProductApiService from "../../app/asiService/productApiService";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveEditProduct } from "./selector";
import { setEditProduct } from "./slice";
import assert from "assert";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../lib/sweetAlert";
import { Definer } from "../../lib/Definer";

// REDUX SELECTOR
const editProductRetriever = createSelector(
  retrieveEditProduct,
  (editProduct) => ({
    editProduct,
  })
);

export function ProductEdit(props: any) {
  /** INITIALIZATIONS **/
  const { product_id } = useParams<{ product_id: string }>();
  const { editProduct } = useSelector(editProductRetriever);
  const dispatch = useDispatch();
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const [file, setFile] = useState(editProduct?.product_images[0] || "");

  const productRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenProduct(
        product_id
      );
      dispatch(setEditProduct(product));
    } catch (err) {
      console.log(`productRelatedProcess ERROR:`, err);
    }
  };

  const [productUpdate, setProductUpdate] = useState<ProductInput>({
    product_name: "",
    product_author: "",
    product_price: 0,
    product_cnt: 0,
  });

  useEffect(() => {
    if (editProduct) {
      setProductUpdate({
        product_name: editProduct.product_name || "",
        product_author: editProduct.product_author || "",
        product_price: editProduct.product_price || 0,
        product_cnt: editProduct.product_cnt || 0,
      });
    }
  }, [editProduct]);


  //** HANDLERS**//
    useEffect(() => {
      if (product_id) {
        productRelatedProcess();
      } else {
        console.error("Product ID is undefined.", product_id);
      }
    }, [product_id, productRebuild]);
  const changeProductNameHandler = (e: any) => {
    productUpdate.product_name = e.target.value;
    setProductUpdate({ ...productUpdate });
  };

  const changeProductAuthorHandler = (e: any) => {
    productUpdate.product_author = e.target.value;
    setProductUpdate({ ...productUpdate });
  };

   const changeProductPriceHandler = (e: any) => {
     productUpdate.product_price = e.target.value;
     setProductUpdate({ ...productUpdate });
   };

   const changeProductCntHandler = (e: any) => {
     productUpdate.product_cnt = e.target.value;
     setProductUpdate({ ...productUpdate });
   };

    const handleSubmitButton = async () => {
      try {
        const productService = new ProductApiService();
        console.log("productUpdate:", productUpdate);

        // Pass product_id as the second argument
        const result = await productService.updateProductData(
          productUpdate,
          product_id
        );

        assert.ok(result, Definer.general_err1);
        await sweetTopSmallSuccessAlert(
          "Information modified successfully",
          700,
          false
        );
        window.location.reload();
      } catch (err) {
        console.log(`ERROR::: handleSubmitButton ${err}`);
        sweetErrorHandling(err).then();
      }
    };

    console.log("log:", product_id);

  return (
    <Container style={{ display: "flex" }}>
      <Stack className="product_creation_page">
        {/* Image Upload Section */}
        <h1>Update product</h1>

        <Box className="productss_right">
          <Box className="input_frame">
            <label>Book title:</label>
            <input
              type="text"
              name="product_name"
              value={productUpdate?.product_name}
              onChange={changeProductNameHandler}
              className="input"
            />
          </Box>
          <Box className="input_frame">
            <label>Book author:</label>
            <input
              type="text"
              onChange={changeProductAuthorHandler}
              value={productUpdate?.product_author}
              className="input"
            />
          </Box>
          <Box className="input_frame">
            <label>Number of Book:</label>
            <input
              type="number"
              name="product_cnt"
              onChange={changeProductCntHandler}
              value={
                productUpdate?.product_cnt !== undefined
                  ? String(productUpdate.product_cnt)
                  : ""
              }
              className="input"
            />
          </Box>
          <Box className="input_frame">
            <label>Product Price:</label>
            <input
              type="number"
              name="product_price"
              onChange={changeProductPriceHandler}
              value={
                productUpdate?.product_price !== undefined
                  ? String(productUpdate.product_price)
                  : ""
              }
              className="input"
            />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box display="flex" justifyContent={"flex-end"} sx={{ mt: "25px" }}>
          <Button variant="contained" onClick={handleSubmitButton}>
            Save
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
