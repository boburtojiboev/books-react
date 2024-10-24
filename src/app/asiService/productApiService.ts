import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { AllProductsSearchObj } from "../../types/others";
import axios from "axios";
import { Product, ProductInput } from "../../types/product";

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

  public async updateProductData(data: ProductInput, productId: string) {
    try {
      // Prepare the product update object as JSON
      const productData = {
        product_name: data.product_name || "",
        product_author: data.product_author || "",
        product_price: data.product_price || 0,
        product_cnt: data.product_cnt || 0,
      };

      // Use template literal to insert productId
      const result = await axios(`${this.path}/edit/${productId}`, {
        method: "POST",
        data: JSON.stringify(productData), // Send data as JSON
        withCredentials: true,
        headers: {
          "Content-Type": "application/json", // Set the content type to application/json
        },
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.data);

      const product: Product = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(product));
      return product;
    } catch (err: any) {
      console.log(`error:: memberLikeTarget ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;
