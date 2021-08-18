// const person = {
//   age: "15",
//   name: "John",
//   hobby: "Juggling",
// };

// const nestedPerson = {
//   person,
//   hp: 15,
// };
// const extendedPerson = {
//   ...person,
//   name: "Donald",
//   hp: 15,
// };
// console.log(extendedPerson);

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, "y", ...b, "h"];
console.log(c);
