class Calculator {
  constructor() {
    this.total = 0
  }

  add(val) {
    this.total += val
    return this
  }

  subtract(val) {
    this.total -= val
    return this
  }

  multiply(val) {
    this.total *= val
    return this
  }

  divide(val) {
    this.total /= val
    return this
  }

  value() {
    return this.total
  }
}

const calculator = new Calculator()
calculator.add(10).subtract(2).divide(2).multiply(5)
console.log(calculator.total)
