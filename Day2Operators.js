console.log("================Day 2 Operators===============")
// Activity 1 - arithematics Operatiom
//Task 1-5
let one = 2
let two = 4
console.log(one+two) //6 +
console.log(two-one) //2 -
console.log(two*one) //8 *
console.log(two/one) //2 /
console.log(two%one) //0 % (fully divided so 0)

//Activity 2 - Assignment Operators
// Task 6-7
let a = 8
let b = 10
b+=a //it will add whereas (b=+a) assigns value of a type casted as (+)
console.log(b) //b=b+a=18
a-=b ///it subtract  whereas (a=-b) is a equals negative(-) type cast of b =-18
console.log(a) //a=a-b=-10 

// Activity 3 - Comparison Operators
// Task 8-10
console.log(6>3) //true
console.log(6<3) //false

console.log(6>6) //false
console.log(6<6) //false

console.log(6>=6) //true
console.log(6<=6) //true


console.log('6'==6) //true! LAZY type checking (only values)
console.log(4==2) //false
console.log(null ==null) //true [The null value represents the intentional absence of any object value]
console.log(null ==undefined) //true both is empty so true
console.log(null ===undefined) //false 


console.log('6'===6) //false! STRICT type checking (DataType && value)

//Activity 4 - Logical Operators
// Task 11-13
//AND
// true && true ==> true
console.log(4>1 && 1<4) //true
// true/false && false/true ==> false
console.log(4>1 && 1>4) //false
console.log(4<1 && 1<4) //false
// false && false ==> false
// console.log(null===undefined && null===void) --> SYNTAX Error void Expect Expression, if evaluate returns undefined if false then false
console.log(null===undefined && undefined==4) //false
console.log(void b) //undefined (since b evaluates as exp it returns undefined)

//OR
// true || true ==>true
console.log(null==null  || null===null ) //true  (console.log("Null ",null<null) ==> false)
// true/false || false/true => true
console.log(null==undefined || null ===void b) //true (void b => undefined)
console.log(null<null || null<=null) //true
// false || false => false
console.log(null<null || null>null) //false

//NEGATION
// !true => false
console.log("negation false",!(null<null || null<=null)) //false
// !false => true
console.log("negation true",!(null<null || null>null)) //true 


// Activity 5 - Ternary Operator
// Task - 14
let numA = -10
let numB = 10
console.log(numA<0?"Negative":"Positive") //Negative
console.log(numB<0?"Negative":"Positive") //Positive

console.log(!(numB<0)?"Positive":"Negative") //Positive !(numB)-> false


// NESTED TERNARY 
// let score = 85;
// let grade = score >= 90 ? 'A' :
//             score >= 80 ? 'B' :
//             score >= 70 ? 'C' :
//             score >= 60 ? 'D' : 'F';

// console.log(grade); // Output: B
// let isMember = true;
// let amountSpent = 120;

// let discount = isMember ? (amountSpent > 100 ? 20 : 10) : (amountSpent > 100 ? 5 : 0);

// console.log(discount); // Output: 20





