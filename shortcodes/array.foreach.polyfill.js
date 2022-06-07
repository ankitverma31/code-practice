// Problem Statement: Polyfill for Array ForEach

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

const arr = [1, 2, 3];
arr.myForEach((item) => console.log(item + 100));
