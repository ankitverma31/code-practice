// Problem Statement: Debouncing
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
// which can cause performance issues. In essence, it limits the execution of a function until a
// certain amount of idle time has passed without it being triggered again.

const getData = (e) => {
  console.log('Fetching Data:' + e.target.value)
}

const debounce = (callbackFn, delay) => {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callbackFn(...args)
    }, delay)
  }
}

const input = document.getElementById('input')
input.addEventListener('input', debounce(getData, 500))

// const getData = () => {
//   console.log("API call...");
// };

// const optimisedFunc = debounce(getData, 10);
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   optimisedFunc();
// }
