function findSumOfNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let n = 10;
console.log(
  "Sum of natural numbers between 1 and " +
    n +
    " is: " +
    findSumOfNaturalNumbers(n)
);
