import axios from 'axios';

export class Delivery {
  static async createRequest(user: string, product: string, quantity: number) {
    const status = await axios.post('http://localhost:8083/request', {
      user,
      product,
      quantity,
    });

    return status.data;
  }
}
