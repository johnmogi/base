// sync takes precedence over async

setTimeout(() => {
  console.log("i wanted to be first");
}, 0);

console.log("I will be first");
