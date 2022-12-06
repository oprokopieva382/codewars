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
