export function capitalizeWords(str: string): string {
  if (!str) {
    return "";
  }
  let tempStr = str.split(" ");
  let tempArr: string[] = [];
  let result: string = "";
  for (let i = 0; i < tempStr.length; i++) {
    tempArr = tempStr[i].split("");
    tempArr[0] = tempArr[0].toUpperCase();
    result += tempArr.join("");
    if (i !== tempStr.length - 1) {
      result += " ";
    }
  }
  return result;
}
