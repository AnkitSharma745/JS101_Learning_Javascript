function sliceof(arr,start,end){
      let a=[]
  for(let i=start;i<end;i++){
    a.push(arr[i])
  }
       return a
  
}


let a =[1,2,3,4,5,6,7]
let st=2
let end=4
console.log(sliceof(a,st,end))