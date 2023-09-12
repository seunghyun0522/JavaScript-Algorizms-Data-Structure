function addUpTo1(n) {
  let result = ((n + 1) * n) / 2;
  console.log(result);
}
function addUpTo2(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) result += i;
  console.log(result);
}
``;
function countUpAndDown(n) {
  console.log("Going up!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back do2wn. Bye!");
}
function logAllBinaries(n) {
  var count = 0;
  var lastNum = "1".repeat(n);
  while (count.toString(2) !== lastNum) {
    console.log(count.toString(2).padStart(n, "0"));
    count++;
  }
  console.log(lastNum);
}
let t1 = performance.now();
let result = addUpTo1(1000000000);
//let result = addUpTo2(1000000000);
//let result = countUpAndDown(10000);
//let result = logAllBinaries(10);
let t2 = performance.now();

console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`);
