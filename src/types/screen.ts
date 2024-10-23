import { Product } from "./product";


// REACT APP STATE//
export interface AppRootState {
  productPage: ProductPageState;
}

// Product PAGE//
export interface ProductPageState {
  allProducts: Product[];
  chosenProduct: Product | null;
}

// Creation PAGE//
// export interface CreationPageState {
//   creationProduct: Product;
//   editProduct: Product;
// }
