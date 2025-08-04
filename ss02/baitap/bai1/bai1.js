function sum(numbers) {
  let total = 0;
  
  for (const number of numbers) {
    if (number % 2 === 0) {
      total += number;
    }
  }

  return total;
}

console.log(sum([1, 2, 3, 4, 5, 6])); //12
