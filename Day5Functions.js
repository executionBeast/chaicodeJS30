console.log("================Day 5 Functions===============")

// Activity - 1 Function Declaration 
// Task 1-2
function evenOdd(x){
  return x%2==0?"Even":"Odd"
}
console.log(evenOdd(234))

function square(x){
  return x*x
}
console.log(square(9))

// Activity 2 - Function Expression
// Task 3-4
let maxOfTwo = function (x,y) {
  return x>=y?x:y 
}
console.log(maxOfTwo(82,71))

let strjodo = function (str1, str2){
  return str1.concat(" ",str2)
}
console.log(strjodo("Awesome", "Function"))


// Activity 3 - Arrow Function
// Task 5-6
const add = (x,y)=>{
  return Number.parseInt(x) + Number.parseInt(y)
}
console.log(add(127,256))



const checkchar = (str,char)=>{
  // console.log("Before Loop",str,char)

  for(let i in str){
  // console.log("In Loop",str[i],char)

    if(str[i]==char){
  // console.log("In Conditional",str[i],char)
      return true
    }
  }
  return false
}
console.log(checkchar("Hello World",'z'))

// Activity 4 - Function Parameters and Default Value
// Task 7-8
function prodct(prm1,prm2=3){
  return prm1*prm2
}
console.log(prodct(3,2))
console.log(prodct(3))

const greet = (name,age=20)=>{
  return `Welcome Warrior, [${name}] You're Aged [${age}], Ready to Conquer Deadly WAR!`
}
console.log(greet("OlympisMons",31))
console.log(greet("OlympisMons"))



// Activity 5 - Higher Order Functions
// Task 9-10
const FuncCaller = function (func,runtime,arg){
  for(let i=0; i<runtime; i++){
    func(arg)
  }
}

function println(arg){ 
  console.log(arg)
}

FuncCaller(println,3,"Kaa ho Maja aawata ki nahi")

console.log("~~~~~~~~~~~~H-O Function~~~~~~~~~~~~~")
// function HOFunc(func1,func2,value){
//   func1(value)
//   return func2(value)
// }
// console.log("H-O Function prints its argument and return it square",HOFunc(println,square,7))

function HOFunc(func1,func2,value){
  func2(`HOFunc uses square(value),pass to println(square(value)) &  Print --> ${func1(value)}`)
  //applies value to func1-->result-->applies to func2
}
HOFunc(square,println,7)
