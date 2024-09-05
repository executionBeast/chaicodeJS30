console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Day 12 Error Handling @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

// Activity 1 - Basic Error Handling with Try-Catch
// Task 1-2
function throwError(){
    throw new Error("Error of throwError() function")
}
try{
    throwError()

}
catch(err){
    console.log(err)
}

new Promise((resolve,reject)=>{
    reject(new Error("The Promise is Rejected as Meant To Be!"))
    // console.log("66666666666666666666666666666666666666666666666666666666")
})
.catch(rejection=>{
        console.log(rejection)
})

// Activity 2 - Finally Block
// Task 3
function ErrorFlow(){
    const randInt = Math.floor((Math.random()*10))
    // console.log("Random Integer is :",randInt)
    if(randInt>=5){
        return randInt
    }
    else{
        throw new Error("randInt less that 5")
    }
}


try{
    console.log(ErrorFlow())

}
catch(err){
    console.log(err)
}
finally{
    console.log("%%%%%%%%%%% No matter what success or error finally block runs always")
}



// Activity 3 - Custom Error Objects
// Task 4-5
//Custom Error
class MyError extends Error{
    constructor(error){
        super()
        this.error = error
        return Error(this.error+" | MyError")
    }
}

function useCustomError(){
    try{
        throw new MyError("Custom Error is Utilized")

    }
    catch(err){
        console.log(err)
    }
}
useCustomError()


function validateString(str){
    try{
        if(str.length == 0){
            throw new MyError("The String is Empty!")
        }
        else{
            return "You are a good person | length:"+str.length
        }
    }
    catch(err){
        console.log(err)
    }
    
}
console.log(validateString("Hello"))
console.log(validateString(""))


// Activity 4 - Error Handling in Promises
// Task 6-7

const randomPromise = new Promise((resolve,reject)=>{
    let num = Math.floor(Math.random()*10)
    console.log("NUmmmm iss :",num)
    if(num>=5){
        resolve("Congrats the random is > 5")
    }
    else{
        reject('Unlucky | The random is < 5')
    }
});

//Both below 2 are sharing the same instance of randomPromise
//If used a function that returns a promise it w'be different instance and state
randomPromise
    .then(promise=>{
        console.log("randomPromise Resolution with then catch===>",promise)
    })
    .catch(rejection=>{
        console.log("randomPromise Resolution with then catch===>",rejection)
    });

(async function useRandomPromise(){
    try{
        const promise = await randomPromise
        console.log("randomPromise Resolution with async await===>",promise)

    }
    catch(err){
        console.log("randomPromise Resolution with async await===>",err)
    }
})();

// const promise = await new randomPromise gives error randomPromise is not a constructor
// randomPromise Resolution with async await===> TypeError: randomPromise is not a constructor
//     at useRandomPromise (Day12ErrorHandling.js:117:31)
//     at Day12ErrorHandling.js:124:3


// Activity 5 - Graceful Error Handling in Fetch
// Task 8-9
//fetch logs this on console even if proper error handling
// Day12ErrorHandling.js:136 
//  GET https://api.github.com/usseerr/103555017 404 (Not Found)
// (anonymous)	@	Day12ErrorHandling.js:136
fetch("https://api.github.com/user/127001")
        .then(response=>{
            console.log("Fetch Promise Handling using then: ",response)
            // const data = response.json() 
            return response.json()   //if executed above line it says already read at above
        })
        .then(data=>{
            console.log("Fetch Promise Handling using then: ",data)
        })
        .catch(err=>{    //rejection
            console.log("Fetch Error Handling using catch: ",err)

        });

(async function(){
    try{
        const resp= await fetch("https://api.github.com/user/127001")
        const data = await resp.json()
        console.log("Fetch Promise Handling using async await try catch",data)

    }
    catch(err){
        console.log("Fetch Promise Error Handling using async await try catch",err)
    }
})();

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ /Day 12 Error Handling @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
