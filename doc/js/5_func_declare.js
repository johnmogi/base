// function run() {
//   let a = 4;
// }

// run(); // hoisted to top

run; // not yet declared, not hoisted...
const run = function () {
  let a = 8;
};
