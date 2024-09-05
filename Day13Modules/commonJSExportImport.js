// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Day 13 Modules @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
// console.log("There is no support of Module Exporting when it used as script in html, Aur yeh Hoga bhii kyo")


// module.exports = {  //this object can be imported by many names as default it cant be imported like const {ep1} = require('./Day13Modules') would be undefined
//     name:'Amee'
// }



// // Activity 1 - Creating and Exporting NativeModulese
// // Task 1-2 


// // Day13Modules.js:6 Uncaught SyntaxError: Unexpected token 'export' (at Day13Modules.js:6:1)
// //Above Error becoz common js don't know export keyword it only understand module and exports

exports.person = {
    name:'Sujit Kumar',
    age:23,
    gender:'Male',
    height:'5ft 6inch',
    weight:'75kg',
    bodyType:'Endomorph',
    lifestyle:'sedentary',
    education:{
        graduation:{
            college:'Rajkiya Engineering College Bijnor',
            course:'Btech IT ',
            duration:'2021-2025', 
            current:'4th year',
            stream:'Information Technology',
            grade:6.5
        },
        intermediate:{
            school:'Khel Gaon Public School Allahabad',
            percentage:72,
            play:'Boxing'
        },
    },
    hobby:['Physical Fitness', 'Communication', 'Spiritualism',],
    skills:['Arduino', 'ESP8266', 'Embedded Systems', 'C', 'C++', 'Java', 'Python', 'Django', 'Selenium', 'TKinter', 'JavaScript', 'NodeJS', 'ExpressJS', 'ReactJS', 'MongoDB', 'HTML', 'CSS', 'Linux'],
    connectivity:{
        phone:['7052070747'],
        email:['raos92249@gmail.com', 'ashokag67570@gmail.com'],
        github:'https://github.com/executionBeast',
        linkedin:'https://www.linkedin.com/in/sujit-kumar-74b9aa203/',
        instagram:'executionBeast',
        gaming:'OlympusMons',
    },
    printInfo:function(){
        console.log(`Name:${this.name}\nAge:${this.age}\nGender:${this.gender}\nHeight:${this.height}\nWeight:${this.weight}`)
    }
}

module.exports.div = (x,y)=>{
    console.log("I am div() exported using module.exports.div=f(){}")
    return x/y
}




// module.exports = anything overwrites the above exports 




// Activity 2 - Named and Default exports
// Task 4- Default Exports

module.exports = function (){
    console.log("I am a default exported function | module.exports = anyOneDefault")
}




// function defaultExportedFunction(){
//     console.log("I am a default exported function")
// }

exports.exportObj = {
    obj:"Object"
}
// module.exports = {defaultExportedFunction}   won;t work for default export




module.exports = {
    msg: 'Wxported Whole Module'
}





// Activity 2 - Named and Default exports
// Task 3-4
// Login --> Token --> Fetch User Details
userDetails = {
    name:'Sujit Kumar',
    age:23,
    gender:'Male',
    height:'5ft 6inch',
    weight:'75kg',
    bodyType:'Endomorph',
    lifestyle:'sedentary',
    email:'raos92249@gmail.com',
    password:12345678
}

function Login(email,password){
    console.log(`Login Successful! Email:${email} Password:${[password]}`)
}

function fetchUser(email){
    console.log("Fetching User Details.......")
    return {name:userDetails.name, age:userDetails.age, email:userDetails.email}
}

function displayUser(user){
    console.log(`Name: ${user.name} Age:${user.age} Email:${user.email}`)
    
}

module.exports = {userDetails, Login, fetchUser, displayUser}





// Activity 1 - Creatin Exporting NativeModules
// Task 1 - create module to export add function not as named 

module.exports = (x,y)=>{
    console.log("I am anonymous f(){} exported using module.exports=f(){} | Default export import")
    return x+y
}

// exports.subtract = (x,y)=>{
//     console.log("I am subtract exported using exports.subtract(){}")
//     return x-y
// }




// Activity 1 - Creatin Exporting NativeModules
// Task 1 - create module to export an object person not as named 

module.exports = {
    name:'Sujit Kumar',
    age:23,
    gender:'Male',
    height:'5ft 6inch',
    weight:'75kg',
    bodyType:'Endomorph',
    lifestyle:'sedentary',
    education:{
        graduation:{
            college:'Rajkiya Engineering College Bijnor',
            course:'Btech IT ',
            duration:'2021-2025', 
            current:'4th year',
            stream:'Information Technology',
            grade:6.5
        },
        intermediate:{
            school:'Khel Gaon Public School Allahabad',
            percentage:72,
            play:'Boxing'
        },
    },
    hobby:['Physical Fitness', 'Communication', 'Spiritualism',],
    skills:['Arduino', 'ESP8266', 'Embedded Systems', 'C', 'C++', 'Java', 'Python', 'Django', 'Selenium', 'TKinter', 'JavaScript', 'NodeJS', 'ExpressJS', 'ReactJS', 'MongoDB', 'HTML', 'CSS', 'Linux'],
    connectivity:{
        phone:['7052070747'],
        email:['raos92249@gmail.com', 'ashokag67570@gmail.com'],
        github:'https://github.com/executionBeast',
        linkedin:'https://www.linkedin.com/in/sujit-kumar-74b9aa203/',
        instagram:'executionBeast',
        gaming:'OlympusMons',
    },
}





//Use Modules
console.log("-------------------------Day 13 Using Modules After Import---------------------------")
//The require function imports the module.exports defined in module or exports.object reference to module.exports

// const {div,add,subtract,person} = require('./Day13Modules.js')
// const {person} = require('./Day13Modules.js')
// const {subtract} = require('./Day13Modules.js')
// console.log(subtract(9,5))
// console.log(div(4,2))
// console.log(person)
// person.printInfo()

const add = require('./Math.js')  //exported function
const person = require('./User.js') //exported an object
const {userDetails, Login, fetchUser, displayUser} = require('./LoginAuth.js')  //Named Import
const defaultExportedFunction = require('./defaultExport.js')  //Default Exported
const entireModule = require('./entireModule.js')
// console.log("------------Activity 1 ----------------")
console.log(add(4,5))
console.log("Logging User imported from User.js ",person)

Login("raos92249@gmail.com", 12345678)
const fetchedUser = fetchUser(userDetails)
displayUser(fetchedUser)

console.log(defaultExportedFunction)
// defaultExportedFunction()

console.log(entireModule)




