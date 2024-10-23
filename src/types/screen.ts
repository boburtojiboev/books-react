import { Product } from "./product";


// REACT APP STATE//
export interface AppRootState {
  productPage: ProductPageState;
  // creationPage: CreationPageState;
}

// Product PAGE//
export interface ProductPageState {
  allProducts: Product[];
}

// Creation PAGE//
// export interface CreationPageState {
//   creationProduct: Product;
//   editProduct: Product;
// }
