import { Calculator } from "./calculator";
import { cMockSumCallback } from "./mocks/calculator.mocks";
import { mocked } from 'ts-jest/utils'

describe('Caltulator test', () => {
  describe('Test without mocks', () => {
    test('should calculate 2 + 2 + 3  = 7', () => {
      const sumCallback = (a, b) => { return a + b };
      const expected = 7;

      const calc = new Calculator();
      const received = calc.calculate([2, 2, 3], sumCallback);

      expect(received).toBe(expected);
    });

    // It is an alias of test
    it('should calculate 2 * 3 = 6', () => {
      const multiplyCallback = (a, b) => { return a * b };
      const expected = 6;

      const calc = new Calculator();
      const received = calc.calculate([2, 3], multiplyCallback);

      expect(received).toBe(expected);
    });
  });

  describe('Test Using a Mock Function', () => {
    it('should calculate 2 + 2 + 3  = 7', () => {
      const mockSumCallback = jest.fn((a: number, b: number) => a + b);
      const items = [2, 2, 3];
      const expected = 7;

      const calc = new Calculator();
      const received = calc.calculate(items, mockSumCallback);

      expect(received).toBe(expected);

      // The mock function is called twice
      expect(mockSumCallback.mock.calls.length).toBe(2);

      // The first argument of the first call to the function was 2
      expect(mockSumCallback.mock.calls[0][0]).toBe(2);
      // The second argument of the first call to the function was 2
      expect(mockSumCallback.mock.calls[0][1]).toBe(2);

      // The first argument of the second call to the function was 2
      expect(mockSumCallback.mock.calls[1][0]).toBe(4);
      // The second argument of the second call to the function was 2
      expect(mockSumCallback.mock.calls[1][1]).toBe(3);

      // The return value of the first call to the function was 4
      expect(mockSumCallback.mock.results[0].value).toBe(4);
      // The return value of the second call to the function was 7
      expect(mockSumCallback.mock.results[1].value).toBe(expected);
    });

    it('should calculate 2 * 3 = 6', () => {
      const mockSumCallback = jest.fn((a: number, b: number) => a * b);
      const items = [2, 3];
      const expected = 6;

      const calc = new Calculator();
      const received = calc.calculate(items, mockSumCallback);

      expect(received).toBe(expected);

      // The mock function is called twice
      expect(mockSumCallback.mock.calls.length).toBe(1);

      // The first argument of the first call to the function was 2
      expect(mockSumCallback.mock.calls[0][0]).toBe(2);
      // The second argument of the first call to the function was 2
      expect(mockSumCallback.mock.calls[0][1]).toBe(3);

      // The return value of the first call to the function was 6
      expect(mockSumCallback.mock.results[0].value).toBe(expected);
    });
  });

  describe('Test Mocking Return Values', () => {
    it('should call sum callback twice', () => {
      // const mockSumCallback = jest.fn((a: number, b: number) => a + b);
      cMockSumCallback.mockImplementation();
      const items = [2, 2, 3];

      const calc = new Calculator();
      const received = calc.calculate(items, cMockSumCallback);

      // expect(received).toBe(expected);

      // The mock function is called once
      expect(cMockSumCallback).toHaveBeenCalled();
      // The mock function is called once
      expect(cMockSumCallback.mock.calls.length).toBe(2);

    });

    it('should calculate 2 + 2 + 3  = 7', () => {
      const items = [2, 2, 3];
      const expected = 7;
      // const mockSumCallback = jest.fn((a: number, b: number) => a + b);
      cMockSumCallback.mockReturnValueOnce(4).mockReturnValueOnce(expected)

      const calc = new Calculator();
      const received = calc.calculate(items, cMockSumCallback);

      expect(received).toBe(expected);

      // The mock function is called twice?. 
      // fourth calls executed.
      // expect(cMockSumCallback.mock.calls.length).toBe(2);
      expect(cMockSumCallback.mock.calls.length).toBe(4);

      // The first argument of the third call to the function was 2
      expect(cMockSumCallback.mock.calls[2][0]).toBe(2);
      // The second argument of the third call to the function was 2
      expect(cMockSumCallback.mock.calls[2][1]).toBe(2);

      // The first argument of the fourth call to the function was 2
      expect(cMockSumCallback.mock.calls[3][0]).toBe(4);
      // The second argument of the fourth call to the function was 2
      expect(cMockSumCallback.mock.calls[3][1]).toBe(3);

      // The return value of the third call to the function was 4
      expect(cMockSumCallback.mock.results[2].value).toBe(4);
      // The return value of the fourth call to the function was 7
      expect(cMockSumCallback.mock.results[3].value).toBe(expected);
    });
  });
});
