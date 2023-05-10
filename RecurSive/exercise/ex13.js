// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 0) return 0;
  else return num + recursiveRange(num - 1);
}

let r = recursiveRange(10);
console.log(r);
