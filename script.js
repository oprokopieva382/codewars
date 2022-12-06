//Reduce but Grow
function grow(x) {
  let sum = 1;
  for (i = 0; i < x.length; i++) {
    sum = sum * x[i];
  }
  return sum;
}
