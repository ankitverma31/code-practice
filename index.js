const series = async () => {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved')
    }, 3000)
  })
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved')
    }, 2000)
  })
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved')
    }, 1000)
  })

  console.log('hello')
  const result1 = await p1
  console.log(result1)
  const result2 = await p2
  console.log(result2)
  const result3 = await p3
  console.log(result3)
}

series()
