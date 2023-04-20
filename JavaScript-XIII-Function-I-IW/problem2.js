//The above function to print the prime number 2 to given limit

function prime(num) {
  let count = 0
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      count++
    }
  }
  if (count == 0) {
    return true
  }
  else {
    return false
  }
}
let n = 15
for (let i = 2; i <= n; i++) {
  if (prime(i)) {
    console.log(i)
  }
}
