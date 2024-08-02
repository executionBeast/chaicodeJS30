console.log("================Day 3 Control Structures===============")
// alert("hello")
//Activity 1 - if-else statements
// Task 1-2
let numTOCheck = -1
// if(numTOCheck>0){
//   console.log("Positive",numTOCheck);
// }
// if(numTOCheck<0){
//   console.log("Negative",numTOCheck)
// }
// if(numTOCheck==0){
//   console.log("Zero",numTOCheck);
// }

if(numTOCheck>0){
  console.log("Positive")
}
else{
  if(numTOCheck<0){
    console.log("Negative")
  }
  else{
    console.log("Zero")
}
}
// console.log("numTOCheck is ",numTOCheck>0?"Positive":numTOCheck<0?"Negative":"Zero")

let age=17
// console.log(age>=18?'You are Eligible to Vote!':'You are not Eligible to Vote!')
if(age>=18){
  console.log("You are Eligible to Vote!")
}
else{
  console.log("You are not Eligible to Vote")
}

// Activity 2 - Nested If-Else 
// Task 3   
let One = 12
let Two = -6
let Three = -8
console.log("greatest of all")
if(One>Two){
  if(One>Three){
    console.log(`${One} is Greater than ${Two} and ${Three}`)
  }
  else{
    console.log(`${Three} is Greater than ${Two} and ${One}`)
  }
}
else{
  if(Two>Three){
    console.log(`${Two} is Greater than ${One} and ${Three}`)
  }
  else{
    console.log(`${Three} is Greater than ${Two} and ${One}`)
  }
}


// Activity - 3 Switch Case
// Task 4-5 
let day = 5
switch(day){
  case 1:
    console.log("Monday")
    break
  
  case 2:
    console.log("Tuesday")
    break
  
  case 3:
    console.log("Wednesday")
    break
  
  case 4:
    console.log("Thursday")
    break
  case 5:
  console.log("Friday")
    break
  case 6:
    console.log("Saturday")
    break
  
  case 7:
    console.log("Sunday")
    break
  
  default:
    console.log("Not a valid Day value!")
  
}

let score = 30
switch(true){
  
  case 100>=score && score >=90:
    console.log("Grade A")
    break
  case 89>=score && score>=80:
    console.log("Grade B")
    break

  case 79>=score && score>=70:
    console.log("Grade C")
    break

  case 69>=score && score>=60:
    console.log("Grade D")
    break

  case 59>=score && score>=33:
    console.log("Grade F")
    break

  default:
    console.log("You are Failed.....!")

}

// "NOTE"
// 100>=score && score >=90 ==> it checks the range effectivity
// 100>=score || score >=90 ==> it does not the case 100>=score --> True for every value less equal 100
// 100>=score >=90 ==> JS Evaluates from LTR so 100>=score--> true/false then 2exp true/false>=90
// JS convert true->1 false->0, now 1/0>=90 both value makes it false That was why default executed at first

// Activity - 4 Conditional (Ternary) Operator
// Task 6
let numb = 79
let evenodd=numb%2==0?"Even":"Odd"
console.log(`Number ${numb} is ${evenodd}`)


// Activity 5 - Combining Conditions
// Task 7
let year = 2023
if(year%4==0){
  if(year%100==0){
    if(year%400==0){
      console.log(`Year ${year} a Leap Year`);
    }
    else{
    console.log(`Year ${year} not a leap year`);

  }

  }
  else{
    console.log(`Year ${year} a leap year`);
  }
}
else{
  console.log(`Year ${year} not a leap year`);
}
