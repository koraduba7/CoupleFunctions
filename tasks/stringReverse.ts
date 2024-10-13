export function stringReverse(str: string): string {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[str.length - i - 1];
  }
  return newString;
}
