const sampler = (fn, count) => {
  let counter = 0;
  return () => {
    if (++counter !== count) return;
    fn.call();
  };
};

const displayMsg = () => {
  console.log("hii");
};

const sample = sampler(displayMsg, 4);
sample();
sample();
sample();
sample();
