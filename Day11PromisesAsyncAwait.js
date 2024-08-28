console.log("================Day 11 Promises Async Await ===============")
// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// catch
// : 
// ƒ catch()
// constructor
// : 
// ƒ Promise()
// finally
// : 
// ƒ finally()
// then
// : 
// ƒ then()
// Symbol(Symbol.toStringTag)
// : 
// "Promise"
// [[Prototype]]
// : 
// Object
// [[PromiseState]]
// : 
// "pending"
// [[PromiseResult]]
// : 
// undefined



// console.log('start');
// setTimeout(() => console.log('timeout'), 0);
// Promise.resolve().then(() => console.log('promise'));
// console.log('end');


// Day11PromisesAsyncAwait.js:4 Uncaught TypeError: Promise resolver undefined is not a function
//     at new Promise (<anonymous>)
//     at Day11PromisesAsyncAwait.js:4:18
// (anonymous) @ Day11PromisesAsyncAwait.js:4
function logPromise(){
    console.log("Procesing ......") 
    return new Promise(function(resolve){       //The function inside Promise executes as soon it is defined
    setTimeout(function(){     //The timeout here is not neccessary it only used to mimic real world processing delay
        console.log("Processing Done")   //timeOut ki jagah koi bhi aisa process operation ho sakta tha jo ki significant time leta
    },3000)
    resolve("Hello I am resolved");  //resolver of the promise and returns it to the functio

})
}

// logPromise() is not a function
// logPromise().then(function(resolvedPromise){
//     console.log("Promise Resolved",resolvedPromise)
// })
// console.log(logPromise)  //logging it shows Promise{<pending>}

//Q) Create an asynchronous function that returns the sum of two number as a promise delay (optional)
function asyncSum(x,y){
    return new Promise((resolve)=>{
        let result = x+y
        resolve(result)  //this resolves promise of return sum of two numbers
    })
}

async function logSum(x,y){
    let addition = await asyncSum(x,y)
    console.log("logSum Function using async await",addition)
}

let addition = asyncSum(8,9)   //Promise {<fulfilled>: 17}  
// Note: Yeh promise lene kaa sahi tarika nhi hai either use async await or .then
console.log("Asynchronous Sum :",addition)
asyncSum(8,9).then(promise=>{console.log(promise)})
logSum(12,12)


let promiseO = new Promise(function(resolve,reject){
    resolve("Hello promiseOne Resolved")
})

promiseO.then(promise=>{console.log("Promise ONE:     ",promise)})

"----------------------------------------------------------------------------------------"
// async function getUser(){
//     const response = await fetch("https://api.github.com/user/103555017")
//     console.log("Type of fetch response :",typeof response) //object
//     const data =await response.json()
//     console.log("GITHUB DATA : ",data)
// }
// getUser()

fetch("https://api.github.com/user/103555017")
    .then(response=>{
        console.log("Fetch Response: ",response) //object
        return response.json()
    })
    .then(data=>{
        console.log("Fetch Json Data", data)
    })
    .catch(err=>{
        console.log(err)
    })
"-------------------------------------------------------------------------------------------"


// Activity 1 - Understanding Promises
// Task 1-2
function resolveAfterTwoSecond(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am resolved after 2 seconds")
        },2000  )
    })
}

resolveAfterTwoSecond().then(promise=>{
    console.log(promise)
})

function rejectAfterTwoSecond(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("I am rejected after 2 seconds")
            // throw new Error("The promise is rejected after two seconds")
        },2000  )
    })
}

rejectAfterTwoSecond().catch(rejection=>{
    console.log(rejection)
})


// Activity 2 - Chaining Promises
// Task 3-4
// Example - send login request -> fetching user profile -> displaying profile
function Login(email, password){
    console.log("Login Initiated......")
    return new Promise(resolve=>{
        console.log("Loging in...... Email: ",email,"Password: ",password)
        setTimeout(()=>{
            resolve(`${email}123@#${password}`) //sending Token as a promise responsse
        },2000) //db 1990
    })
}

function FetchProfile(token){
    return new Promise(resolve=>{
        console.log("Fetching User Profile....")
        setTimeout(()=>{
            resolve({name:"Rahul", age:18, gender:"Male", token:token})
        },3000)
    })
}

Login("raos92249@gmail.com", "1234567")
                                       .then(token=>FetchProfile(token)).then(jsonData=>{
                                        console.log("User Profile",jsonData)
                                       })

// function DisplayProfile() it is not asynchronous


// Activity 3 - Using Async Await
// Task 4-5 
function shoping(money){
    console.log("A promise based shoping between Dukan Daar aur Bachha")
    return new Promise((resolve,reject)=>{
        if(money>5){
            setTimeout(()=>{
                resolve("Bolo Bachaa Kya Kharidna Chahte Ho")
            
            },2000)
            }
        else{
            // console.log("Naalayak Paise bhi nhi laya")
            setTimeout(()=>{
                reject(new Error("Pahle apne pairo pe khadaa hona sikh!"))                
            },4000)
        }
    })
}


(async function bachhaShopping(){
    let kharidneGaya = await shoping(10)
    console.log(kharidneGaya)
    
})();


(async function garibBachhaShopping(){
    try{
        console.log("When a garib bacha goes to shoping")
        let dobaraKharidneGaya = await shoping(3)
        console.log(dobaraKharidneGaya)
    }
    catch(e){
        console.log(e)
    }
})();



// Activity 4 - Fetching Data From an API
// Task 6-7
let url = "https://api.github.com/user/103555017"
let myurl ="https://worko-crud.vercel.app/api/user"

// fetch("https://worko-crud.vercel.app/api/user")
//             .then(response=>{
//                 console.log("Response From my CRUD APIs",response)
//                 return response.json()
//             }).then(data=>{
//                 console.log("JSON RESPONSE : ",data)
//                 data.reduce((prev, curr)=>{
//                     console.log(curr)
//                 },i=0)
//             })
//             .catch(err=>{
//                 console.log("Error in Fetching User Data",err)
//             })



async function getUser(){
    const response = await fetch("https://worko-crud.vercel.app/api/user")
    const data = await response.json()
    data.reduce((prev, curr)=>{
        console.log(curr)
    },i=0)
}
getUser()

// Activity 5 - Concurrent Promises
// Task 8-9
const promiseOne = new Promise(resolve=>{
    setTimeout(()=>{
    resolve("Promise One ------->  Resolved!")

    },3000)
})
const promiseTwo = new Promise(resolve=>{
    resolve("Promise Two ------->  Resolved!")
})
const promiseThree = new Promise(resolve=>{
    resolve("Promise Threee ------->  Resolved!")
})

Promise.all([promiseThree, promiseOne, promiseTwo ]).then(
    result=>{
        result.reduce((prev, curr)=>{
        console.log(curr)
    },i=0)
    console.log("::::::::::::::::Promise.all() Result",result)
})

Promise.race([promiseOne, promiseTwo, promiseThree]).then(raceWinner=>{
    console.log("--------> Race Winner Is: ",raceWinner)
})


