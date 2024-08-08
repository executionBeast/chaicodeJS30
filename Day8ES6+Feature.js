console.log("================Day 8 ES6+ Features ==============")
// Activity 1 - Template Literals 
// Task 1-2
let name="John Cena"
age = 70
let person = `Name: ${name}, Age: ${age}`
console.log(person)

let application = `
To
The Head of Department Information Technology
Rajkiya Engineering College Bijnor

Date=06/08/2002
Subject: Request to my forgotten email id password

Respected Sir,
  I am Sujit Kumar a final year student of session 2021-2025 branch Information Technology.
  I request you to please change the password of my forgotten email id and look into the matter
  as soon as possible and notify me.
  
  Thank you
  Sujit Kumar
`
console.log(application)


// Activity 2 - Destructuring
// Task 3-4
var fruits = ["banana", "aam", "apple", "orange"]
// let [f1,f2,f3,f4]= [fruits] //banana aam apple orange undefined undefined undefined 
let [f1,f2,f3,f4] = fruits
console.log(f1,f2,f3,f4)


let {title,author} = Book1
console.log(title,author)
console.log({title,author} = Book1) //{title: 'Essentials of Indian Philosophy', author: 'M. Hiriyanna', year: 1946, getInfo: ƒ, updateYear: ƒ, …}
//The whole object is referred to and only the props meant to be extracted


// Activity 3 - Spread and Rest Operators
// Task 5-6
let fruit2 = [...fruits,"kiwi","palm fruit","guava"]
console.log(fruit2)

function summ(a,b,...rest){
  console.log(...rest)
  if(rest.length==0){
    return a+b
  }else{
    let sum=a+b
    for(el of rest){
      sum+=el
    }
    return sum
  }
}
// console.log(3+5+[9])  -->89
console.log(summ(4,5,8,6)) //effectively adds up
// let (...narr) = 6,4,7,3 --> it can't be used like this only applicable in object function array

let meraArray =(...narr)=>narr

console.log("meraArray: let meraArray =(...narr)=>narr ",meraArray(1,2,3,4,5,6,7,8))


// Activity 4 - Deafault Parameters
// Task 7
// Alredy Done

// Activity 5 - Enhanced Object Literals
// Task 8-9
const lib = {
  name:"XYZ Library",
  schedule:"9:00PM - 11:00PM",
  charge:599,
  librarian:"Raghu Viswa",
  mob:3243240823,
  books:[
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
  ],
  facility:{
    water:"Available Cold | Normal",
    ac:"Available",
    wifi:"Available"
  },
  getInfo:function (){
    console.log(`Name: ${this.name}\nSchedule: ${this.schedule}\nPrice: ${this.charge}\n
Librarian:${this.librarian}\nPhone:${this.mob}`)
  },
  getFacility:function (){
    console.log(`Water: ${this.facility.water}\nAir Condition: ${this.facility.ac}
WiFi: ${this.facility.wifi}`)
  },
  getBooks:function (){
    this.books.reduce((prev,curr,index)=>{
      console.log(`Book${index+1}:${curr}`)
    },initial=0)
  }
}
lib.getInfo()
lib.getFacility()
lib.getBooks()


pname = "Rahul"
age = 12
gender="M"

person={
  pname,
  age,
  gender
}
console.log(person)