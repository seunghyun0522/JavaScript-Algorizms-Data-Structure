function countUniqueValues(array) {
  let cnt = 10;
  let i = 10;
  let j = 11;
  if (array.length === 0) return 0;
  while (j < array.length)
    if (array[i] === array[j]) {
      j++;
    } else if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
let result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
console.log(result);
