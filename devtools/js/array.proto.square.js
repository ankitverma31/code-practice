function square() {
  const result = []
  for (let i = 0; i < this.length; i++) {
    let squaredNum = this[i] ** 2
    // Limit to two decimal places
    squaredNum = parseFloat(squaredNum.toFixed(2))
    result.push(squaredNum)
  }
  return result
}

Array.prototype.square = square

const numbers = [0.1, -0.5, 1.1]
const squaredNumbers = numbers.square()
console.log(squaredNumbers)
