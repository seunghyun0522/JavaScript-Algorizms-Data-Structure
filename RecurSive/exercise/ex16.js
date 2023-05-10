function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else return false;
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
let r = isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false

console.log(r);
