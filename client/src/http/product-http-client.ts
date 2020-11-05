import axios from 'axios';

export class ProductHttpClient {

  async getProducts() {
    return await axios.get('http://localhost:3000/products');
  }

  getProductById(id: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data : { name : "book"}});
      }, 3000);
    });
  }
}