function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

let a = [5, 4, 3, 2, 1];
var noSwaps;
for (let i = a.length; i > 0; i--) {
  noSwaps = true;
  for (let j = 0; j < i - 1; j++) {
    if (a[j] > a[j + 1]) {
      swap(a, j, j + 1);
      noSwaps = false;
    }
  }
  if (noSwaps) break;
}

console.log(a);
