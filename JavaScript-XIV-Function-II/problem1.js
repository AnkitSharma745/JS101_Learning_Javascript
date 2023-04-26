// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join 
function myJoin(element, separator) {
  let bag = "";
  for (let i = 0; i < element.length - 1; i++) {
    bag += element[i] + separator;
  }
  return bag + element[element.length - 1];
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let sep = "-"
let x = myJoin(arr, sep)
console.log(x)
