import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { AllProductsSearchObj } from "../../types/others";
import axios from "axios";
import { Product } from "../../types/product";

class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getAllProducts(data: AllProductsSearchObj) {
    try {
      const url = "/products",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });
      assert.ok(result, Definer.general_err1);
      console.log("state:", result.data.satate);
      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR ::: getBestProducts ${err.message}`);
      throw err;
    }
  }

  // Assuming this method is inside ProductApiService
  async getChosenProduct(product_id: string) {
    try {
      const url = `/products/${product_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenProduct ${err.message}`);
      throw err;
    }
  }

  async deleteProduct(product_id: string) {
    try {
      const url = `/delete/${product_id}`;
      const result = await axios.delete(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("Product deleted:", result.data.message);
      return result.data; // Return the result if needed
    } catch (err: any) {
      console.log(`ERROR ::: deleteProduct ${err.message}`);
      throw err;
    }
  }

  async editProduct(product_id: string, productData: any) {
    try {
      const url = `/edit/${product_id}`;
      const result = await axios.put(this.path + url, productData, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("Product updated:", result.data.message);
      return result.data; // Return the result if needed
    } catch (err: any) {
      console.log(`ERROR ::: editProduct ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;