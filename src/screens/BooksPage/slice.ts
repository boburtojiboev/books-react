import { createSlice } from "@reduxjs/toolkit";
import { ProductPageState } from "../../types/screen";
const initialState: ProductPageState = {
  allProducts: [],
  chosenProduct: null,
};

const productPageSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
  },
});
export const { setAllProducts, setChosenProduct } = productPageSlice.actions;
const ProductPageReducer = productPageSlice.reducer;
export default ProductPageReducer;
