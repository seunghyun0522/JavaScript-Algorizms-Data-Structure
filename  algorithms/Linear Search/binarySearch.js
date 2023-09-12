function binarySearch(array, n) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (array[middle] !== n && left <= right) {
    if (n < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (array[middle] === n) return middle;

  return -1;
}

let r = binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1

console.log(r);
