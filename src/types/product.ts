export interface Product {
    _id: string;
    product_name: string;
    product_author: string;
    product_price: number;
    product_sold_cnt: number;
    product_cnt: number;
    product_images: string[];
    mb_id: string;
    createdAt: Date;
    updatedAt: Date;
  }