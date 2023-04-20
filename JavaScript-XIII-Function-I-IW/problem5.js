//Problem 5: Write a function to replace spaces in a given string with - .

function replace(str, separator) {
  let bag = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      bag += "-"
    }
    else {
      bag += str[i]
    }
  }
  return bag
}
x = replace("ankit shd de dke")
console.log(x)