const person = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const deepFlatten = (obj) => {
  const result = {};
  const deepFlattenHelper = (obj) => {
    for (const key in obj) {
      const currKey = key;
      const currVal = obj[currKey];
      if (Array.isArray(currVal) || typeof currVal !== "object") {
        result[currKey] = currVal;
      } else {
        deepFlattenHelper(obj[key]);
      }
    }
  };
  deepFlattenHelper(obj);
  return result;
};

const finalObj = deepFlatten(person);
console.log(finalObj);
