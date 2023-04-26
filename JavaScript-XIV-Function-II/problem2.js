// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function last(arr,search){
  let index= -1
  for(let i=0;i<arr.length;i++){
    if(arr[i]==search){
      index=i
    }
  }
  return index
}
a =[1,2,3,5,6,5553,]
s=4
x=last(a,s)
console.log(x)
