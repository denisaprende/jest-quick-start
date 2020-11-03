export class Calculator {
  calculate(items: number[], operationCallback: (a: number, b: number) => number): number {
    let res = items[0];
    for (let index = 1; index < items.length; index++) {
      res = operationCallback(res, items[index]);      
    }
    return res;
  }
}