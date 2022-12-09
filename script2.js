//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
//Grasshopper - Personalized Message
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
//Return Negative
function makeNegative(num) {
  return num <= 0 ? num : num * -1;
}
//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}
//Remove exclamation marks
function removeExclamationMarks(s) {
  return s.split("!").join("");
}
//Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
