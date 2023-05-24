function swapFunction(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//Bubble Sort!
function Bubblesort(array) {
  let max = 0;
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array);
      console.log(cnt++);
      swapFunction(array, i, j);
      // //   let tmp = array.join("");
      // //   console.log(tmp);
      //   if (tmp > max) max = tmp;
    }
  }

  return max.toString();
}

function solution(numbers) {
  var answer = "";
  let max = Bubblesort(numbers);
  console.log(max);
  return answer;
}

const numbers = [3, 30, 34, 5, 9];
solution(numbers);
//"6210"
