// Problem 2 : Given a character in lower case print the upper case character
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let char="a"
let lower="abcdefghijklmnopqrstuvwxyz"
for(let i=0;i<upper.length;i++){
  if(char==lower[i]){
    char=upper[i]
  }
}
console.log(char)