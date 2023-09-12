function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

let result = areThereDuplicates(1, 2, 3);
console.log(result);
