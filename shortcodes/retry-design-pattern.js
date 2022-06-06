// Problem Statement: Implement a function in JavaScript that retries promises N number of times with a delay between each call.

async function retryOperation() {
  let currentTry = 0;
  while (true) {
    try {
      externalAPICall();
      console.log("Succeeded!");
      break;
    } catch (error) {
      currentTry++;
      console.log(`Failed attempt ${currentTry}`);
      if (currentTry >= 3) {
        console.log("Retry maximum reached. Exiting");
        break;
      }
    }
    await sleep(2000);
  }
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function externalAPICall() {
  let shouldPass = Math.random() > 0.5;
  if (shouldPass) {
    return true;
  } else {
    throw "Failure";
  }
}

retryOperation();
