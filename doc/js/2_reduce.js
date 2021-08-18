const arr = [1, 2, 3, 4, 5];

// const arrReduced = arr.reduce((item, currentVal) => {
//   return item + currentVal;
// });

// console.log(arrReduced);

// const arrReduced = arr.reduce(function (i, curValue, index) {
//   //   return console.log(i , curValue, index);
//   return i + curValue;
// });

const arrReduced = arr.reduce(function (accumulator, curValue, index) {
  //   return console.log(accumulator , curValue, index);
  return accumulator + curValue;
}, 2);

console.log(arrReduced);
