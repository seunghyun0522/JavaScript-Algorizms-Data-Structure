function areThereDuplicates(...arr) {
  let check = [];

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    check[letter] ? (check[letter] += 1) : (check[letter] = 1);

    if (check[letter] > 1) return true;
  }
  return false;
}

let result1 = areThereDuplicates(1, 2, 3); // false
console.log(result1);
let result2 = areThereDuplicates(1, 2, 2); // true
console.log(result2);
let result3 = areThereDuplicates("a", "b", "c", "a"); // true
console.log(result3);
