import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../types/screen";
const selectCreatePage = (state: AppRootState) => state.createPage;

export const retrieveCreateProduct = createSelector(
  selectCreatePage,
  (CreatePage) => CreatePage.createProduct
);
export const retrieveEditProduct = createSelector(
  selectCreatePage,
  (CreatePage) => CreatePage.editProduct
);
