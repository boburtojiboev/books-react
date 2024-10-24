import { createSlice } from "@reduxjs/toolkit";
import { CreatePageState } from "../../types/screen";
const initialState: CreatePageState = {
  createProduct: null,
  editProduct: null,
};

const createPageSlice = createSlice({
  name: "createPage",
  initialState,
  reducers: {
    setCreateProduct: (state, action) => {
      state.createProduct = action.payload;
    },
    setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
  },
});
export const { setCreateProduct, setEditProduct } = createPageSlice.actions;
const CreatePageReducer = createPageSlice.reducer;
export default CreatePageReducer;
