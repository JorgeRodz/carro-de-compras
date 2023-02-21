const arr = [0, 1, 2, 3, 4].reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 10);

console.log(arr);
