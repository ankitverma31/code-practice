// Problem Statement: Promise.all polyfill

const promiseAllPolyfill = function (taskList) {
  let resolvedValues = [];
  let resolvedCounter = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((task, index) => {
      task
        .then((value) => {
          resolvedValues[index] = value;
          resolvedCounter++;
          if (taskList.length === resolvedCounter) {
            resolve(resolvedValues);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

promiseAllPolyfill([asyncTask1(), asyncTask2(), asyncTask3()])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.all([asyncTask1(), asyncTask2(), asyncTask3()]).then((values) => {
//   console.log(values);
// });

function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1");
    }, 2000);
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2");
    }, 1000);
  });
}

function asyncTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3");
    }, 500);
  });
}
