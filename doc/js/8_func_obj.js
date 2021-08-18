const person = {
  age: "15",
  name: "John",
  hobby: "Juggling",
};

// function getName() {
//   console.log(person.name);
// }

// function getName({ name } = {}) {
//   console.log({ name });
// }
// getName(person);

const arr = [1, 2, 3, 4];

const [a, b, , d] = arr;

function getName({ name } = {}, [a] = []) {
  console.log({ name }, a);
}

getName(person); // avoid undef

// https://www.skillshare.com/classes/The-Complete-React-Bootcamp-2021-w-React-Hooks-Firebase/895676015/projects
