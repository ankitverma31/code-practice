// Problem Statement: Implement ClearAllInterval in JavaScript


window.intervalIds = [];
const originalSI = window.setInterval;

window.setInterval = function (fn, delay) {
  const id = originalSI(fn, delay);
  intervalIds.push(id);
};

window.clearAllInterval = function () {
  while (intervalIds.length) {
    clearInterval(intervalIds.pop());
  }
};

setInterval(() => {
  console.log("Hello");
}, 2000);

setInterval(() => {
  console.log("Hello2");
}, 500);

clearAllInterval();

setInterval(() => {
  console.log("Hello3");
}, 1000);
