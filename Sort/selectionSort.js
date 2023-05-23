function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    console.log(arr);
    console.log("Swapping to");
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    console.log(arr);
    console.log("*************");
  }
  return arr;
}

let r = selectionSort([34, 22, 10, 19, 17]);
console.log(r);
