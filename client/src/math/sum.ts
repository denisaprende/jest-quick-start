import { Calculator } from "./calculator";

class Sum {
  constructor(private calculator: Calculator) {  }
  sum(a: number, b: number): number {
    return a + b;
  }

  sumAll(items: number[]): number {
    return this.calculator.calculate(items, this.sum);
  }
}