function groupByType(collection) {
  const result = collection.reduce((acc, curr) => {
    if (!acc[curr.type]) {
      acc[curr.type] = []
    }
    acc[curr.type].push(curr)
    return acc
  }, {})
  return [result]
}

const combineArray = [
  { type: 'fruits', value: 'orange' },
  { type: 'fruits', value: 'apple' },
  { type: 'vegetables', value: 'cucumber' },
]

console.log(groupByType(combineArray))
