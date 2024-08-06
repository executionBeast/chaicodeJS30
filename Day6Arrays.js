console.log("================Day 6 Arrays===============")
// Activity 1 - Array Creation and Access
// Task 1-2
arr = [1,2,3,4,5]
console.log(arr)
console.log("First:",arr[0],"Last:",arr[arr.length-1])

// Activity 2 - Array Methods (Basic)
// Task 3-6
arr.push(6) //--> returns length after push
console.log(arr)
arr.pop() //--> returns length before popping
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(1)
console.log(arr)

// Activity 3 - Array Methods Intermediate
// Task 7-9

arr1 = arr.map(function (value,index,arr,){
  // console.log("Value Index Array",value, index, arr,s,x,y)
  return 2*index
})
console.log("Array created with map & doubled each value of arr",arr1)

arrEven = arr.filter((value,index,arr,any="any")=>{
  if(value%2==0){
    console.log("edgehih")
    // return arr.length  //only true and false matter here
    return true                   //not the value intentionaly returned
                       //if anyhow value=0 it won't be returned so give true
                      //if not returned arr--> EMPTY
  }
})
console.log(arrEven)

console.log(arr)

let sum =0
// arr.reduce((prev,curr,index,arr)=>{  //reduce(callbackFn, initialValue)
//   console.log(`Prev=${prev}, Curr=${curr}, Index=${index}, Array=${arr}`)
//   // console.log(`Curr=${curr}, Index=${index}, Array=${arr}, sum=${sum}`)
//   return sum = sum +initialValue+curr
//   //By Default No return but xeplicitly --> return arr
// },initialValue=1)

// console.log(sum)
arr.reduce((prev,curr,index,arr)=>{
    console.log("Prev:",prev,"Index:",index)
    // if(prev==arr[initialIndex]){
    // console.log("Prev:",prev,"Index:",index)
    // sum = sum+ prev+curr
//IF NOTHING RETURNED PREV---> UNDEFINED (no increment)
    // }
    sum = sum + curr
},initialIndex=0)
console.log(sum)

// Activity 4 - Array Iteration
// Task 10-11
console.log("----Iteration with traditional For Loop-----")
for(let i=0; i<arr.length; i++){
  console.log("Iteration",i,"Element",arr[i])
}
//OR
console.log("----Iteration with For In Array Loop-----")
for(let i in arr){  //i-->index
  console.log("Iteration",i,"Element",arr[i])
}
//OR
for(let el of arr){  //For of gives elements
  console.log("For of", el)
}


//Array.forEach(value,index,arr,thisArg)
arr.forEach((value, index, array,any="forEach")=>{
  console.log(`Value:${value}, Index:${index}, array:${array}, any:${any}`)
})


// Activity 5 - MultiDimensional Arrays
// Task 12-13

let Matrix2D = [
  ["susan_storm",29,"F"],
  ["rid_richard",32,"M"],
  ["ben",34,"M"],
  ["victor_von_doom",38,"M"]
]
console.log(Matrix2D)
console.log("   Name      Age    Gender")
console.log(`${Matrix2D[0][0]},  ${Matrix2D[0][1]},      ${Matrix2D[0][2]}`)

