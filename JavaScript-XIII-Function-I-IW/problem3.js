//The above function to print the non prime number 2 to given limit 
//I created a function in first program and now i am using the same function 
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
    continue
  }
  else {
    console.log(i)
  }
}
