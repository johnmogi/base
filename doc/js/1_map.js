const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((item) => {
//   return item + 1;
// });

// console.log(newArr);

// map returns a new array.

const newArr = arr.map(function (value, index, arr) {
  return value * 2;
});
console.log(newArr);
