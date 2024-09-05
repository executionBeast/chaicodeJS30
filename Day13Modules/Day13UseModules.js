// Common JS Uses only 
// require()
// exports --> module.exports 
// module.exports = it is an object returned by require any object or function added like 
// module.exports.any  OR    exports.any
// default import => const defaultImport = require() Means When Only one module exported it is default 
// Named Import => const {any1 as Specific ,any2,any3 ,....} = require('module-path')
//We allways get whole props exported in module.exports


// --------------------------------------Below is ES Modules-----------------------------------
// ES Modules have import export default
// export any 
// export default any


// Activity 1 - Creating and Exporting NativeModules
// Task 1-2
import {add, person} from './moduleExport.js';
console.log(add)
add(2,4)
console.log(person.name, person.age, person.gender)
person.printInfo()



// Activity 2 - Named and Default exports
// Task 3-4
import exportDefault, {PI,Add, Div, Subtract, Multiply} from "./Math.js"
console.log(PI,Add(12,1), Div(12,6), Subtract(9,6), Multiply(3,7), exportDefault())


// Activity 3 - Importing Entire Module
// Task 5
import *  as entireModule from './entireModule.js';
const {email,password} = entireModule.userDetails;
console.log(typeof entireModule,entireModule.day, entireModule.name,entireModule.activity,entireModule.Obj,entireModule.userDetails)
entireModule.Login(email, password)
const user = entireModule.fetchUser(email)
// console.log("Fetched User Data : ",user)
entireModule.displayUser(user)


// Activity 4 - Using Third Party Modules
// Task 6-7
import _ from 'lodash';
// console.log(lodash)
const numbers= [1,2,3,4,5,6]
const object1 = { a: 1, b: { x: 10, y: 20 } };
const object2 = { b: { y: 30, z: 40 }, c: 3 };

const merged = _.merge(object1, object2)
let max = _.max(numbers)
let chunk = _.chunk(numbers,2)

console.log(max,chunk, merged)


import axios from 'axios'
try{
    axios.get("https://worko-crud.vercel.app/api/user?id=Naina1720523461292")
        .then(response=>{
            // console.log(response)
            console.log(response.data)
        })
    
}
catch(e){
    console.log("Error While Fetching UserData",e)

}


// Activity 5 - Module Bundling (Optional)
// Task 8
