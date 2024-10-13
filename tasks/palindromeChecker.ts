export function palindromeChecker(str: string): boolean {
  let tempStr = str.replace(/\s/g, "").split("").reverse().join("");
  str = str.replace(/\s/g, "");
  return tempStr == str;
}
