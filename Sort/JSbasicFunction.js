function numberCopare(num1, num2) {
  return num1 - num2;
}

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

let r1 = [6, 4, 15, 10].sort(numberCopare);
let r2 = ["steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);

console.log(r1);
console.log(r2);
