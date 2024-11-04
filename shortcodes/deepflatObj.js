const person = {
  A: '12',
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
}

function deepFlatten(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    // Construct the new key based on the current property
    const newKey = parentKey ? `${parentKey}.${key}` : key

    // If the value is an object, recurse deeper
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      deepFlatten(obj[key], newKey, result)
    } else {
      // If it's not an object, add it to the result
      result[newKey] = obj[key]
    }
  }
  return result
}

const finalObj = deepFlatten(person)
console.log(finalObj)
