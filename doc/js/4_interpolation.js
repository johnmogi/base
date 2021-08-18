const name = "john";
const age = 42;

const getName = () => "john";

// console.log(name + "my age is: " + age);

// console.log(`my name is ${name} and my age is ${age}`);
console.log(`my name is ${getName()} and my age is ${age}`);
// I didn't know you can call a function within interpolation...
