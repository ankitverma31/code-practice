// Problem Statement: pipe() and compose()

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const reverse = (string) => string.split("").reverse().join("");

const pipe = (...funcs) => (value) => {
    return funcs.reduce((acc, func) => {
      return func(acc);
    }, value);
  };

const result = pipe(getName, uppercase, reverse)({ name: "AnkitVerma" });
console.log(result)

// OUTPUT: AMREVTIKNA