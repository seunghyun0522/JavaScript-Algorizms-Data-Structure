function same(arr1, arr2) {
  //길이가 다르면 일단 false
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

let result = same([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(result);
