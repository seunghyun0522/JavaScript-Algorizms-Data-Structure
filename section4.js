//Problem solving - step 1 : Understand the Problem

//ex1) Write a function which takes two numbers and returns thier sum.

//1. Can I restate the the problems in my own words?
"implement addition";
//2. what are the inputs that go into the problem?
// - ints?
// - floats?
// - what about string for large numbers?
//3. what are the outputs that should come from the solution to the problem?
// - int? float? string?
//4. Can the outputs be determined from the inputs?
//5. How should I label the important pieces of data that are a part of the problem?

//ex2) write a function which takes in a string and returns counts of each character in the string.

//Problem solving - step 2 :Explore Concrete Examples

//step1
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1,e:1,l:2,o:1}

//step2
charCount("Your PIN number is 1234!");
/*
    1:1,   
    2:1,
    3:1,
    4:1,
    b:1,
    e:1,
    i:2,
    m:1,
    n:2,
    o:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1
 */
charCount("Hello Hi");

//step3
charCount("");
//step4
charCount(123);

//Problem solving - step 3 :break it Down
function charCount(str) {
  //do something
  //return an object with keys that are lowercase alphanumeric characters in the string;
  //values should be the counts for those characters
}
function charCount(str) {
  //make object to return at end
  var result = {};
  //loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    //if the char is a num/letter And is a key  in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      //if the char is a number/letter And not in object, add it to object and set value t o 1
      result[char] = 1;
    }
  }
  //if character is something else (space, period, etc..) don't do anything
  //return object at end
  return result;
}
//Problem solving - step 4 :Solving & simplify
