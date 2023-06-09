function averagePair(array, avg) {
  let left = array[0];
  let right = array[array.length - 1];

  while (left < right) {
    let result = (left + right) / 2;
    if (result === avg) return true;
    else if (result > avg) right--;
    else left++;
  }
  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

console.log(`result is ${result}`);
