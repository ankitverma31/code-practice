// Problem Statement: Observer design pattern in JavaScript

const Subject = function () {
  this.subscribers = [];

  this.subscribe = function (fn) {
    this.subscribers.push(fn);
  };
  this.unsubscribe = function (fn) {
    this.subscribers = this.subscribers.filter((item) => item !== fn);
  };
  this.fire = function () {
    this.subscribers.forEach((fn) => fn.call());
  };
};

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.fire();
subject.unsubscribe(observer2);
subject.fire();

function observer1() {
  console.log("Observer 1 fired!!");
}

function observer2() {
  console.log("Observer 2 fired!!");
}
