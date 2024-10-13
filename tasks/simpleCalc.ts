export function simpleCalc(
  a: number,
  b: number,
  operation: string
): number | null | string {
  switch (operation) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      if (b === 0) {
        return "error";
      }
      return a / b;
      break;

    default:
      return null;
      break;
  }
}
