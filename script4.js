//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
    return [];
  }
  let array = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      array[0] += 1;
    } else {
      array[1] += input[i];
    }
  }
  return array;
}
//Find the stray number
function stray(numbers) {
  let sortedN = numbers.sort();
  return sortedN[0] !== sortedN[1] ? sortedN[0] : sortedN[sortedN.length - 1];
}
//or better option
const stray = (nums) => nums.reduce((a, b) => a ^ b);
