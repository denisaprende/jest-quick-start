import { ProductHttpClient } from "./product-http-client";
import axios from 'axios';
import { mocked } from "ts-jest/utils";

// jest.mock('axios');

describe('ProductHttpClient', () => {
  let productClientHttp: ProductHttpClient;

  beforeEach(() => {
    productClientHttp = new ProductHttpClient();
  })

  describe.only('without mocking', () => {
    // only pass if the server in http://localhost:3000/products is running.
    // comment jest.mock('axios');

    it('should retrieve all products succesfully', () => {

      const expected = [{ name: 'computer' }, { name: 'mouse' }];
      productClientHttp.getProducts().then(res => {
        expect(res.data).toEqual(expected);
      });
    })

    it('should retrieve one product succesfully', (done) => {

      const expected = { name : "book"};
      productClientHttp.getProductById(1).then((res: any) => {
        expect(res.data).toEqual(expected);
        done()
      });
    })
  })

  describe('Mocking Modules', () => {
    // Uncomment jest.mock('axios');

    it('should retrieve all products succesfully - with Jest Mocked', async () => {
      const expected = { data: [{ name: 'computer' }, { name: 'mouse' }]};

      // axios.get.mockResolvedValue(expected); In documentation works for JavaScript but in TypeScript doesn't.
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockReturnValue(Promise.resolve(expected));
      
      const received = await productClientHttp.getProducts();

      expect(mockedAxios.get).toHaveBeenCalled();
      expect(received).toEqual(expected);
    })

    it('should fail retrieving all products - with mocked ts-jest', () => {
      const error = { message: "some error" };

      mocked(axios.get).mockReturnValue(Promise.reject(error));
      return expect(productClientHttp.getProducts()).rejects.toEqual(error);
    })
  })
});