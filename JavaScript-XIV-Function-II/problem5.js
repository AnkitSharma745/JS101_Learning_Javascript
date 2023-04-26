// Write a custom function that has the same behavior of inbuilt Array Includes Function


function myIncludes(arr, searchElement, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex += arr.length;
  }

  for (let i = fromIndex; i < arr.length; i++) {

    if (arr[i] === searchElement) {
      return true
    }
  }


  return false
}


let arr = ['apple', 'banana', 'cherry'];

let includes1 = myIncludes(arr, 'banana');
console.log(includes1)
const includes2 = myIncludes(arr, 'orange');
console.log(includes2)