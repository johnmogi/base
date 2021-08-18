const person = {
  age: "15",
  name: "John",
  hobby: "Juggling",
};
// const name = person.name;
// const age = person.age;
// const hobby = person.hobby;
// console.log(name, age, hobby);

// const { age, name, hobby } = person;
// const { age, name, hobby, undef } = person;
// console.log(name, age, hobby, undef);

const hobby = 5;
const { age, name, hobby: hobby2 } = person;
console.log(name, age, hobby, hobby2);
