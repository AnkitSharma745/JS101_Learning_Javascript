// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let n = 39
let sum = 0
for (let i = 0; i <= n; i++) {
  if (i % 3 == 0) {
    sum += i
  }
}
console.log(sum)

