function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log(`start is ${char} , ${start}`);
    }
    longest = Math.max(longest, i - start + 1);
    console.log(`longest ${longest}`);
    seen[char] = i + 1;
    console.log(seen[char]);
  }
  return longest;
}

findLongestSubstring(""); // 0
let r = findLongestSubstring("rithmschool"); // 7

console.log(r);
