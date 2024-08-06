console.log("================Day 7 Objects ==============")
// Activity 1 - Object Creation and Access
// Task 1-2
let Book1 ={
  title:'Essentials of Indian Philosophy',
  author:'M. Hiriyanna',
  year:1936
}
console.log(Book1)
console.log(`Title: '${Book1.title}'\nAuthor: '${Book1.author}'`)


// Activity 2 - Object Methods
// Task 3-4
// Book1.getInfo = ()=>{   //Arraow does not have context so this can't be used
//   // console.log(Book1.title,Book1.author)
//   console.log(`Title: '${Book1.title}'\nAuthor: '${Book1.author}'`)

// }
Book1.getInfo = function(){
  console.log(`Title: '${Book1.title}'\nAuthor: '${Book1.author}'`)
}

// console.log(Book1)
Book1.getInfo()
console.log(Book1)

Book1.updateYear = function(year){
  this.year = year;
  console.log("Updated Book Info",this)
}
Book1.updateYear(1946)


// Activity 3 - Nested Objects
// Task 5-6
let pustkalya = {
  name:"OlympianChronicle",
  books:[
    'Essentials of Indian Philosophy',
    'The Discovery of India',
    'India After Gandhi'
  ]
}

console.log(pustkalya)
console.log(`Library Name: ${pustkalya.name}, Pustaks: ${[...pustkalya.books]}`)


// Activity 4 - The this keyword
//Task 7
Book1.getPublish = function(){
  return `${Book1.title}_${Book1.year.toString()}`;
}
console.log(Book1.getPublish())

// Activity 5 - Object Iteration
// Task 8-9
for(prop in Book1){
   console.log(prop)
}

console.log(Object.keys(Book1),Object.values(Book1))
