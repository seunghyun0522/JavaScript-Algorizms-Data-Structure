// function charCount(str) {
//   var obj = {};
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//
//       }
//     }
//   }
//   return obj;
// }

function charCount(str) {
  var obj = {};
  for (var char of str) {
    //a~z , 0~9 , 밑줄,대시,마침표, 쉼표 등을 제거하고 문자와 숫자만
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

//정규식보다 아래와 같이 charCodeAt을 하면 코드 실행이 더 빠르다.
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123) //lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
