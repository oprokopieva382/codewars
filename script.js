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
