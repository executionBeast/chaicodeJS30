console.log("================Day 4 Loops===============")
// Activity 1 - For Loop
// Task 1-2
for(let i=1; i<11; i++){
  console.log("Printing 1 - 10",i)
}

let sankhya = 5
for(let j=1; j<11; j++){
  console.log("Table of 5",sankhya*j)
}

// Activity 2 -  While Loop
// Task 3-4
let sum110 = 0
let counter = 1
while(counter<11){
  
  sum110 += counter
  counter++
}
console.log("SUM 1-10 :",sum110)

while(counter!=0){
  if(counter==11){
   counter--
   continue 
   
  }
  console.log(counter)
  counter--
}

// Activity 3 - Do...While Loop
// Task 5-6
let n5 = 1
do{
  console.log("Print 1- 5 Do...While",n5)
  n5++
}while(n5<6)

let n = 5
let facto = 1

do{
  facto = facto*n
  console.log("Factorial ",facto,n)
  // fact = fact-1
  n--

}while(n!=1)

// Activity 4 - Nested Loops
// Task 7
let pattern = []
for(let i=1; i<6; i++){
  let pstring=""
  for(let j=0; j<i; j++){
    // pstring = pstring+"*"
    pstring = pstring.concat('*')
    // console.log(pstring) 
    // console.log(pstring,j)
  }
  console.log(pstring)
  // pattern.push(pstring)
  // console.log(pstring,i)
}

// Activity 5 - Loop Control Statements
// Task 8-9
let intr=1
while(intr<11){
  if(intr==5){
    // console.log("Skipped five")
    intr++
    continue
  }
  console.log(intr)
  intr++
}
console.log("1 to 10 Break 7")
intr=1
while(intr<11){
  if(intr==7){
    // console.log("Skipped five")
    break
  }
  console.log(intr)
  intr++
}