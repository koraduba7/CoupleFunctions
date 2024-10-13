export function arrayFiltering(arr: number[]): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
