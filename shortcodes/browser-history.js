class BrowserHistory {
  constructor() {
    this.history = [];
    this.index = -1;
  }

  // visit url
  visit(url) {
    this.history[++this.index] = url;
  }
  // currentUrl url
  currentUrl() {
    return this.history[this.index];
  }
  // go back
  goBack() {
    this.index = Math.max(0, --this.index);
  }
  // go goForward
  gogoForward() {
    this.index = Math.min(this.history.length - 1, ++this.index);
  }
}

const bh = new BrowserHistory();

bh.visit("A");
console.log(bh.currentUrl());

bh.visit("B");
console.log(bh.currentUrl());

bh.visit("C");
console.log(bh.currentUrl());

bh.goBack();
console.log(bh.currentUrl());

bh.visit("D");
console.log(bh.currentUrl());

bh.goBack();
console.log(bh.currentUrl());

bh.goForward();
console.log(bh.currentUrl());

// Output:
// "A"
// "B"
// "C"
// "B"
// "D"
// "B"
// "D"
