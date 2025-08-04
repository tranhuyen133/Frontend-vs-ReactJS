const checkElement = (array, value) => {
  return array.includes(value);
};

console.log(checkElement([1, 2, 3, 4, 5], 3)); 
console.log(checkElement([1, 2, 3, 4, 5], 6)); 
