function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) return i;
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
let r = linearSearch([100], 100); // 0

console.log(r);
