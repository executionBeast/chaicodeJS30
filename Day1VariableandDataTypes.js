console.log("================Day 1 Variables and Data Types===============")
//Activity 1:
var num1 = 69
let num2 = 6.9
console.log("Var and Let",num1,num2)

//Activity 2
const isDay1Completed = true
console.log(isDay1Completed)

//Activity 3
let challengeDay =1
let challengeName = 'Day 1: Varibles and Data Types'
let willYouCompleteThisChallenge = true
let description = {
  challenge:"Day 1: Varibles and Data Types",
  outcome:"Understand Variables assignment and it types",
  activities:5
}

let allActivity=[
  {
    num:1,
    task:[1,2]
  },
  {
    num:2,
    task:[3]
  },
  {
    num:3,
    task:[4]
  },
  {
    num:4,
    task:[5]
  },
  {
    num:5,
    task:[6]
  },
  
]
console.log(typeof challengeDay,typeof challengeName,typeof willYouCompleteThisChallenge,typeof description,typeof allActivity)

//Activity 4
let baarishHogi = true
console.log(baarishHogi)
baarishHogi = false
console.log(baarishHogi)



// Activity 5
const fixHaiNaCompleteToKarLoge = true
console.log(fixHaiNaCompleteToKarLoge) //Executed and Output

/* fixHaiNaCompleteToKarLoge = false  /*--->Uncaught TypeError: Assignment to constant variable.
at Day1VariableandDataTypes.js:55:27
(anonymous) @ Day1VariableandDataTypes.js:55 */
console.log(fixHaiNaCompleteToKarLoge) //No Output after const reassignment no line of code excutes



//----------------------Feature Request 1--------------------------------------------------------------------------------------------


//Built IN Objects --> objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more
//User Defined Objects are defined by us for business logic

let string = "String"
let number = 1458548716491649232438254 //Not Precise as BigInt --> Number.MAX_SAFE_INTEGER  is (2^53-1) 
//MaxDigits --> 16
console.log("Number is: ",number) //1.4585487164916493e+24
let bigint = BigInt(1458548716491649232438254847638463)
console.log(bigint) //1458548716491649348427449049808896n

let undefine = undefined
let Null = null
//Symbols used in Object Keys `same same but different
let sym = Symbol("this is unique even if created again with same string")
let date = new Date('2002-08-15')
console.log("VALUES :", string, number,bigint, undefine,Null, sym, date)
console.log("\n TYPES :", typeof string, typeof number,typeof bigint, typeof undefine,typeof Null, typeof sym, typeof date)


//----------------------Feature Request 2--------------------------------------------------
let behave = "letbeforeassignment"
console.log(behave)
const be = "constbeforeassignment"
console.log(be)

behave = "letafterassignment"
console.log(behave)

// be= "constafterassignment"
console.log(behave,be)

//Result 
/*
letbeforeassignment
Day1VariableandDataTypes.js:90 constbeforeassignment
Day1VariableandDataTypes.js:93 letafterassignment
Day1VariableandDataTypes.js:95 Uncaught TypeError: Assignment to constant variable.
    at Day1VariableandDataTypes.js:95:3

*/

