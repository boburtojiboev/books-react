export interface SearchObj {
    page: number;
    limit: number;
    order: string;
}

export interface AllProductsSearchObj {
  page: number;
  limit: number;
  order: string;
}

// export interface ProductSearchObj {
//     page: number;
//     limit: number;
//     order: string;
//     restaurant_mb_id?: string,
//     product_collection?: string
// }

export interface CartItem {
    _id: string;
    quantity: number;
    name: string;
    price: number;
    image: string;
  }

 