// Problem 3 : Given an array of numbers find the average of all the even numbers.
let even=0
let arr=[2,35,3,5,2,5,6,7,2,4,67,3,4,5,5,6,7,6,6,]
let count=0
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    count++
    even+=arr[i]
  }
}
console.log(even/count)