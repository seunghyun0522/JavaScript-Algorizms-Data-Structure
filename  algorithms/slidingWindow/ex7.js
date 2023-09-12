function maxSubarraySum(array, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

let r = maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

console.log(r);
