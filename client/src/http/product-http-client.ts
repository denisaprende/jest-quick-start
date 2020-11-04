import axios from 'axios';

export class ProductHttpClient {

  async getProducts() {
    return await axios.get('http://localhost:3000/products');
  }

}