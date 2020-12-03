const reverseString = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

console.log(reverseString("Seafoam Green"));
console.log(reverseString("Hello"));
console.log(reverseString("SuperDeeDuper"));