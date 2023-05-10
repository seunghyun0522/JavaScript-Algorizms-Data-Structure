function fib(num) {
  // add whatever parameters you deem necessary - good luck!

  if (num < 3) return 1;
  else return fib(num - 1) + fib(num - 2);
}

let r = fib(2); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465

console.log(r);
