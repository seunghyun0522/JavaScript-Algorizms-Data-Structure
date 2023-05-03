function maxSubarraySum(array, n) {
  let max = 0;
  let result;
  if (array.length === 0) return null;
  for (let i = 0; i <= array.length - n; i++) {
    result = 0;
    for (let j = i; j < i + n; j++) {
      result += array[j];
    }
    console.log(max);
    if (result > max) max = result;
  }
  return max;
}

let result = maxSubarraySum([4, 2, 1, 6, 2], 4);

console.log(result);
