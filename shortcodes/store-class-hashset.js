// Problem Statement: Implement a simple store class (hashSet) in JavaScript with set(key, value), get(key), & has(key) methods.

class Store {
  constructor() {
    this.myStore = {};
  }

  set(key, val) {
    this.myStore[key] = val;
  }

  get(key) {
    return this.myStore[key];
  }

  has(key) {
    return this.myStore.hasOwnProperty(key);
  }
}

const storeObj = new Store();
storeObj.set("a", 10);
storeObj.set("b", 20);
storeObj.set("c", 30);

console.log(storeObj.get("b"));
console.log(storeObj.has("c"));
console.log(storeObj.get("d"));
console.log(storeObj.has("e"));
