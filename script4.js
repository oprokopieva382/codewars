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
