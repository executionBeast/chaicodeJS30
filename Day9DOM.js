console.log("=======Day 9 DOM Manipulation =========")
// Activity 1 - Selecting and Manipulating customElements
// Task 1-2
const dom = document.querySelector("#dom")
function print(){
  
}

let spanText = document.getElementById("span-text")
spanText.innerHTML = "<h1>Heading set By innerHTML</h1>"
// spanText.textContent = "<h1>Hello</h1>"
let pText = document.getElementsByClassName('p-text')
console.log(pText)
pText[0].innerText = "Paragraph Text set by innerText"
pText[0].style.backgroundColor="#00ff00"


let textContentSpan = document.getElementById("span-text-content")
textContentSpan.textContent="text Content set by textContent"
console.log(textContentSpan)
//NOTE 1.innerHTML 2.innerText 3.textContent - set text content in html tag element

//Activity 2 - Creating and Appending Elements
// Task 3-4
let body = document.body
console.log(body)
let div = document.createElement("div")
div.textContent = "Text by txtContent in dynamically created Div"
console.log(div)
body.appendChild(div)

let ul = document.createElement("ul")
let li = document.createElement("li")
li.textContent = "Python"
ul.appendChild(li)
dom.appendChild(ul)
// ul.outerHTML = "<h2>Programming Languages:" IT OverWrites being done above

// Activity 3 - Removing Elements
// Task 5-6
let toBeRemoved = document.createElement("h1")
toBeRemoved.innerText = "This Heading is to be removed by js"
dom.appendChild(toBeRemoved) //appended
//el.remove() --> to which ever it applies removes the Element
console.log(toBeRemoved)
toBeRemoved.remove()

let domLastChild = document.createElement("h1")
domLastChild.innerText = "I am #dom's last child and to be removed by dom.lastChild.remove()"
dom.appendChild(domLastChild)
console.log(dom.lastChild)
dom.lastChild.remove()



//Activity 4 - Modifying Attributes and Classes
// Task 7-8
let img1= "https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-development.jpeg"
let img2= "https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-developer.jpeg"
let img3= "https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-development-roadmap-1536x1229.jpg"

let imgContainer = document.createElement("div")
let ptext = document.createElement("p")
ptext.innerText="Full Stack Image One"
imgContainer.id = "img-container"
imgContainer.style.backgroundColor= "#91919191"
imgContainer.style.height = "auto"
imgContainer.style.padding="10px"
imgContainer.style.justifyContent= "center"
imgContainer.appendChild(ptext)
dom.appendChild(imgContainer)


let imgEl = document.createElement("img")
imgEl.alt="Image not available"
imgEl.src = img1
imgEl.style.height = "290px"
imgContainer.appendChild(imgEl)
console.log(imgContainer, imgEl)

// Activity 5 - Event Handling
// Task 9-10
let sbutton = document.createElement('button')
sbutton.innerText="Change Image2"

let bbutton = document.createElement('button')
bbutton.innerText="Change Image3"

imgContainer.appendChild(sbutton)
imgContainer.appendChild(bbutton)

sbutton.onclick=function(){
  ptext.innerText="Full Stack Image Second"
  imgEl.src = img2
  
}
bbutton.onclick =function(){
  ptext.innerText="Full Stack Image Third"
  imgEl.src = img3
}
imgContainer.style.border="10px solid #51515191"
imgContainer.addEventListener("mouseover",function(){
  imgContainer.style.borderRadius = "10px"
  imgContainer.style.border = "6px #85858585"
  imgContainer.style.boxShadow="4px 4px 10px 5px #919191"
  
})




// OLD
console.log("================Day 9 DOM Manipulation ==============")
// // Activity 1 - Selecting and Manipulating Elements
// // Task 1-2

// var dom1  = document.getElementById("dom1")
// var cls = document.getElementsByClassName("cls")

// console.log("Original of dom1 (innerHTML) :",dom1.innerHTML)
// console.log("Original of dom1 (innerText) :",dom1.innerText)

// dom1.innerText="<h1> dom1.innerText='text' replace all->text(not rendered as html</h1>"
// cls[0].innerHTML="<h1> Heading | cls[0].innerHTML='string' replace all->html parse string to html</h1> Original Color:darkslatebule"

// console.log(cls)
// cls[0].style.backgroundColor="#212121"

// //Traditional for Loops are operable on HTMLCollection
// // NOTE--> cls is HTML Collection not an array(an array can be constructed to apply array methods)
// // Array.from(cls) --> array with methods of array operable
// // [...cls] -->array with methods of array operable


// // dom.innerHTML="#dom text changed by JS"
// // var domhead = document.getElementById("domhead")
// // domhead.innerTexT="Hello bfdi am modified by DOM"
// // console.log(domhead)
// // NOTE--> innerText get the Text of parent as well as children elements
// // innerHTML--> get the children element inside targeted parent with text content

// // Notes ::::
// /*  document.getElementById("id").id.class.getAttribute("att-name").setAttribute("att-name","att-value")
//                                .style.backgroundColor.padding.height.width.etc...
//                                .innerHTML.innerText
//                                .etc...


// .innerText --> get the visible part of text
// .textContent --> get the all text visible/invisible/hidden

//                           */



// // Activity 2 - Creating and Appending Elements
// // Task 3-4
// "1st Way Create div and Text Content in it"
// const div1 = document.createElement('div')
// div1.textContent=  "<h1> DIV1 | 1st way of creating element</h1>| textContent"
// document.querySelector('#dom1').appendChild(div1)

// "2nd Way Create div and Text Content in it"
// const div2 = document.createElement('div')
// const textNode = document.createTextNode('2nd way of creating element | textNode')
// div2.append(textNode)
// dom1.appendChild(div2)

// "3rd Way Create div and Text Content in it"
// const div3 = document.createElement('div')
// div3.innerHTML = "<em><strong>3rd way of creating element | innerHTML | emphasized | strong </strong> </em>"
// dom1.appendChild(div3)


// //Add li list item to an exisiting <ul> </ul>
// const ul = document.querySelector("ul")
// console.log(ul)  //<ul></ul>
// ul.className = 'language'
// ul.style.backgroundColor = "#212121"
// ul.style.color="white"
// //alert(ul)  //[object HTMLUListElement]
// function addLanguage(langName){
//   let li = document.createElement('li')
//   li.innerText=langName
//   ul.appendChild(li)
// }
// addLanguage("Javascript")
// function addOptiLanguage(langName){
//   let li = document.createElement('li')
//   let textNode = document.createTextNode(langName) //-->efficient than innerHTML as create only one node at specified
//   // li.textContent = langName --> Most efficient | just change text value of an element
//   // ul.appendChild(li.appendChild(textNode)) --> append text returned by textNode not li element
//   // console.log(li.appendChild(textNode))  --> "C++"
//   li.appendChild(textNode)
//   ul.appendChild(li)
// }

// addOptiLanguage("C++")



// // Activity 3 - Removing Elements
// // Task 5-6

