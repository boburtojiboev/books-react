import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { CartItem} from "../../types/others";

class OrderApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async createOrder(data: CartItem[]) {
    try {
      const url = "/orders/create",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const order: any = result.data.data;
      console.log("order:", order)
      return order;
    } catch (err: any) {
      console.log(`createOrder, ERROR: ${err.message}`);
      throw err;
    }
  }

  // async getMyOrders(order_status: string) {
  //   try {
  //     const url = `/orders?status=${order_status}`,
  //       result = await axios.get(this.path + url, {
  //         withCredentials: true,
  //       });

  //     assert.ok(result?.data, Definer.general_err1);
  //     assert.ok(result?.data?.state != "fail", result?.data?.message);
  //     console.log("state:", result.data.state);

  //     const orders: any = result.data.data;
  //     console.log("orders:", orders)
  //     return orders;
  //   } catch (err: any) {
  //     console.log(`getMyOrders, ERROR: ${err.message}`);
  //     throw err;
  //   }
  // }

  // async updateOrdersStatus(data: any) {
  //   try {
  //     const url = "/orders/edit",
  //       result = await axios.post(this.path + url, data, {
  //         withCredentials: true,
  //       });

  //     assert.ok(result?.data, Definer.general_err1);
  //     assert.ok(result?.data?.state != "fail", result?.data?.message);
  //     console.log("state:", result.data.state);

  //     const order: any = result.data.data;
  //     return order;
  //   } catch (err: any) {
  //     console.log(`updateOrdersStatus, ERROR: ${err.message}`);
  //     throw err;
  //   }
  // }
}

export default OrderApiService;