// Problem Statement: Implement a function that takes a list of async functions as input and executes them in a series that is one at a time. The next task is executed only when the previous task is completed.

function asyncSeries(taskList) {
  if (taskList.length === 0) {
    console.log("finished!!!!!!!!!");
    return;
  }
  let currentTask = taskList.shift();
  currentTask().then((val) => {
    console.log(val);
    asyncSeries(taskList);
  });
}

asyncSeries([asyncTask2, asyncTask1, asyncTask3]);

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
