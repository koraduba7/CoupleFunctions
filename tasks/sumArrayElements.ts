export function sumArrayElements(arr: number[]): number | string {
  if (arr.length === 0) {
    return "error";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
