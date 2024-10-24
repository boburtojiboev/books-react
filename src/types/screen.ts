import { Product } from "./product";


// REACT APP STATE//
export interface AppRootState {
  productPage: ProductPageState;
  createPage: CreatePageState;
}

// Product PAGE//
export interface ProductPageState {
  allProducts: Product[];
  chosenProduct: Product | null;
}

// Creation PAGE//
export interface CreatePageState {
  createProduct: Product | null;
  editProduct: Product | null;
}
