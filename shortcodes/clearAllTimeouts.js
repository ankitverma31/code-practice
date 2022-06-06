// Problem Statement: Implement clearAllTimeouts in JavaScript

window.timeoutIds = [];
const originalST = window.setTimeout;
window.setTimeout = function (fn, delay) {
  const id = originalST(fn, delay);
  timeoutIds.push(id);
};

window.clearAllTimeouts = function () {
  while (timeoutIds.length) {
    clearTimeout(timeoutIds.pop());
  }
};

setTimeout(() => {
  console.log("Timeout 1");
}, 500);

setTimeout(() => {
  console.log("Timeout 2");
}, 1000);

clearAllTimeouts();

setTimeout(() => {
  console.log("Timeout 2");
}, 2000);
