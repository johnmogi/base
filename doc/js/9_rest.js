// const obj = {
//   name: "john",
//   age: 14,
//   hobby: "programming",
// };

// const { name, ...newObj } = obj;

// console.log(name, newObj);

function restArr(a, ...anythingGoes) {
  console.log(a, anythingGoes);
}

restArr(1, 2, 3, 4, 5, 6);
