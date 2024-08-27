console.log("================Day 10 Event Handling===============")

// Activity 1 - Basic Event Handling
// Task 1-2

const eventHDiv = document.querySelector(".event-handling-div")
console.log(eventHDiv)
let changeButton = document.querySelector(".change-para")

changeButton.addEventListener('click',function(){
    console.log(this) 
    //${this} in case of callback as arrow function it is refering to global this becoz in arrow function there is no this available or context of object working on
    let p = document.querySelector(".event-handling-div p")
    console.log(p)
    p.textContent = "Paragraph Changed By Clicking Button"
    this.innerText="Para Change"
})


let eventImg = document.querySelector('.event-img')
eventImg.style.border = "4px solid #FAEA2C"
eventImg.addEventListener('dblclick',function(){
    this.style.visibility = "hidden"
})



// Activity 2 - Mouse Event
// Task 3-4

eventImg.addEventListener('mouseover',function(){
    this.style.backgroundColor="black"
})

eventImg.addEventListener('mouseout',function(){
    this.style.backgroundColor="#91919191"
})


// Activity 3 - Keyboard Events
// Task 5-6
// let keyEvent = new KeyboardEvent("keydown")
let evInput = document.querySelector(".ev-input")
let inOutText = document.querySelector(".in-outtext span")
evInput.addEventListener('keydown',function(e){

    console.log("Keydown Log: ",e.key)
})


evInput.addEventListener('keyup',function(e){
    console.log("Input Field Value",evInput.value)
    // inOutText.appendChild(txtNde)
    inOutText.textContent = evInput.value

})


// Activity 4 - Form Events 
// Task 7-8
let form = document.querySelector(".form")
let email = document.querySelector('.email')
let password = document.querySelector('.password')

console.log(form)
form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("Email : ",email.value, "Password : ",password.value)
    // console.log(e)
})

let plang = document.querySelector("#p-lang span")
let langSelect = document.querySelector("#languages")
console.log(plang, langSelect)

// form.addEventListener("change",function(){       //working
//     console.log("Changes in option")
//     alert("dfedf")

// })
langSelect.addEventListener("change",function(){
    console.log(this.value)   
    plang.textContent = this.value  

})



// Activity 5 - Event  Delegation
// Task 9-10

let charList = document.querySelector(".char-list")
// console.log(charList)
charList.addEventListener("click",function(e){
    
    console.log(e.target.textContent)
})

let charInput =document.querySelector(".char-input")
let addChar = document.querySelector(".add-char")

addChar.addEventListener("click",function(){
    let liChar = document.createElement("li")
    liChar.className= "li-item"
    let value = charInput.value
    liChar.textContent=value
    charList.appendChild(liChar)
})

charInput.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
    let liChar = document.createElement("li")
    liChar.className= "li-item"
    let value = charInput.value
    liChar.textContent=value
    charList.appendChild(liChar)
    }
})