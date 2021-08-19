// const myPromise = new Promise((resolve, reject) => {
//   resolve("yes");
//   reject("nope");
// });

// // console.log(myPromise);

// myPromise
//   .then((val) => {
//     return val;
//   })
//   .then((newVal) => {
//     console.log(newVal);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const myPromise = (num) => {
  return new Promise((res, rej) => {
    if (num < 3) {
      res("good");
    } else {
      rej("bad");
    }
  });
};

// myPromise(2)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => {
//     console.log(val);
//   });

// async function newPromise() {
//   const backFrom = await myPromise(1);

//   console.log(backFrom);
// }

async function newPromise(num) {
  try {
    const backFrom = await myPromise(num);
    console.log(backFrom);
  } catch (err) {
    console.log("number is too big: ", err);
  }
}

newPromise(2);
