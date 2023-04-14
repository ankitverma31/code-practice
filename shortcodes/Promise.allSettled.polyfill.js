// Promise.allSettled polyfill


const promise1 = Promise.resolve("1");
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("2");
  }, 2000)
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject("3");
  }, 1000)
);

const promiseAllSettled = (promiseArr) => {
  const outcomes = [];
  let settledCount = 0;
  return new Promise((resolve) => {
    for (const promise of promiseArr) {
      promise
        .then(
          (result) => {
            outcomes.push({ status: "fulfilled", value: result });
          },
          (error) => {
            outcomes.push({ status: "rejected", reason: error });
          }
        )
        .finally(() => {
          settledCount++;
          if (settledCount === promiseArr.length) {
            resolve(outcomes);
          }
        });
    }
  });
};

promiseAllSettled([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
