// Problem 4: Given 3 numbers (all different values), print which is greatest
let a = 0
let b = 2
let c = 10
if (a > b) {
  if (a > c) {
    console.log(a, "a is greater")
  }
  else {
    console.log(c, "c is greater")
  }
}
else {
  if (b > c) {
    console.log(b, "b is greater")
  }
  else {
    console.log(c, "c is greater")
  }
}