function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  a = (a + "").split("");
  b = (b + "").split("");

  if (a.length != b.length) return false;
  const check = [];
  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    check[letter] ? (check[letter] += 1) : (check[letter] = 1);
  }
  for (let i = 0; i < b.length; i++) {
    let letter = b[i];
    if (!check[letter]) return false;
    else {
      check[letter] -= 1;
    }
  }
  return true;
}

let result1 = sameFrequency(182, 281); // true
console.log(result1);
let result2 = sameFrequency(34, 14); // false
console.log(result2);
let result3 = sameFrequency(3589578, 5879385); // true
console.log(result3);
let result4 = sameFrequency(22, 222); // false
console.log(result4);
