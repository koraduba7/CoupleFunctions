export function removeDuplicates(arr: number[]) {
  let cleanArr = new Set(arr);
  return Array.from(cleanArr.values());
}
