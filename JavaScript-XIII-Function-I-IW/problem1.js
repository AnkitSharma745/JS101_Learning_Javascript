// Problem 1: Create a function to check if a number is Prime or Not

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
console.log(prime(13))
