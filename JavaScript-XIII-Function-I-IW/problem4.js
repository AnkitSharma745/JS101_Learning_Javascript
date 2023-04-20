function small_case(char) {
  let flag = false
  let lower = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < lower.length; i++) {
    if (char == lower[i]) {
      flag = true
    }
  }
  return flag
}

// calling a function and passing the value
console.log(small_case("Y"))

if (small_case("J")) {
  console.log("Charactere is a small case")
}
else {
  console.log("Character is a upper case")
}