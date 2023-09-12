function isSubsequence(array, result) {
  var copy = [];
  let i = 0;
  for (let j = 0; j < result.length; j++) {
    if (array[i] === result[j]) {
      copy += array[i];
      i++;
    }
  }
  return array === copy;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
const result = isSubsequence("abc", "acb"); // false (order matters)
console.log(result);
