function addUpTo1(n) {
  let result = ((n + 1) * n) / 2;
  console.log(result);
}
function addUpTo2(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) result += i;
  console.log(result);
}

let t1 = performance.now();
let result = addUpTo1(1000000000);
//let result = addUpTo2(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`);
