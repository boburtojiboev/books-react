import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../types/screen";
const selectProductPage = (state: AppRootState) => state.productPage;
export const retrieveAllProducts = createSelector(
  selectProductPage,
  (ProductPage) => ProductPage.allProducts
);
