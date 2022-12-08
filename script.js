//Reduce but Grow
// function grow(x) {
//   let sum = 1;
//   for (i = 0; i < x.length; i++) {
//     sum = sum * x[i];
//   }
//   return sum;
// }
// //Simple multiplication
// function simpleMultiplication(number) {
//   if (number % 2 == 0) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }
//more simple way
function simpleMultiplication(n) {
  return n % 2 == 0 ? n * 8 : n * 9;
}
//Square(n) Sum
function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] ** 2;
  }
  return sum;
}
//or this way
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
//A Needle in the Haystack
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
//Convert a Boolean to a String
function booleanToString(b) {
  return b.toString();
}
//Convert a string to an array
function stringToArray(string) {
  let array = string.split(" ");
  return array;
}
//If you can't sleep, just count sheep!!
var countSheep = function (num) {
  let sheep = "";
  for (i = 1; i <= num; i++) {
    sheep += i + " sheep...";
  }
  return sheep;
};
//List Filtering
function filter_list(l) {
  return l.filter((str) => typeof str != "string");
}
// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//sorted string
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}
//Remove String Spaces
function noSpace(x) {
  return x.split(" ").join("");
}
//Reversed Strings
function solution(str) {
  return str.split("").reverse().join("");
}
//Binary Addition
function addBinary(a, b) {
  return (a + b).toString(2);
}
//Grasshopper - Summation test
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
//Regex validate PIN code
function validatePIN(pin) {
  return /^(\d{6}|\d{4})$/.test(pin);
}
//Shortest Word
function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
//Beginner - Lost Without a Map
function maps(x) {
  return x.map((n) => n * 2);
}
//Reverse words
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
// Friend or Foe?
function friend(friends) {
  return friends.filter(function (item) {
    return item.length === 4;
  });
}
//Convert number to reversed array of digits
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
//Exes and Ohs
function XO(str) {
  let arr = str.toLowerCase().split("");
  return (
    arr.filter((elem) => elem == "x").length ==
    arr.filter((elem) => elem == "o").length
  );
}
//Double Char
function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}
