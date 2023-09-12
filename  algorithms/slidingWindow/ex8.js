function minSubArrayLen(array, result) {
  let n = 1;
  while (n < array.length) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
      sum += array[i];
    }

    for (let i = n; i <= array.length; i++) {
      console.log(sum);
      if (sum >= result) return n;
      else {
        sum = sum - array[i - n] + array[i];
      }
    }
    n++;
  }
  return 0;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
let r = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
console.log(r);
