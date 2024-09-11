console.log("================Day 14 Classes===============")


// Activity 1 - Class Definition
// Task 1-2

class Person{
    constructor(name, age){
        this.name= name
        this.age = age
    }
    greet(){
        console.log(`Hello Dear, I am ${this.name}`)
    }
}

const Ramesh = new Person("Ramesh", 56)
// console.log(Ramesh.age)
// Ramesh.greet()
// Ramesh.age = 67    //It is Possible It Genuinely Updates the Age as Class is also an object 
// console.log(Ramesh.age)


Person.prototype.updateAge = function(age){
    this.age  = age;
}


let rahul = new Person("rahul",19)
console.log(rahul)
rahul.updateAge(90)
console.log("UPadted Rahul",rahul)


// Activity 2 - Class inheritance
// Task 3-4
class Student extends Person{
    constructor(name, age, grade,school,result){
        super(name, age)  //handle your way
        this.grade = grade
        this.school = school
        this.result = result
        this.studentId = name+grade
    }
    getId(){
        return this.studentId
        // console.log("Student ID:", this.studentId)
    }

}

let student1 = new Student("Rohan", 21 ,6 ,"RGKAR", "Pass")
console.log(student1)
console.log(student1.getId())



// Activity 3 - Static Methods and Properties
// Task 5-6
class Car{
    static definition = "Car is a class that allows to create an instance of Car taking 'name' 'model' 'brand'";   //not accessible from instance
    constructor(name, brand, model){
        this.name = name
        this.brand = brand
        this.model = model
        this._id = null
    }
    // get id(){
    //     return _id
    // }

    // set id(){
        
    // }
    static createId(){
        return Math.floor(Math.random()*1000 + 1)
    }

}
const gt = new Car('Yamaha GT 430', 'Yamaha', 'GT')
console.log("Static of Car Class ---> ",Car.definition)

// Person.prototype.static = function(){
//     return "Person class allows to create an instance of a person taking name and age"
// }
// console.log("Person Class 000000000000000>>>>",Person)



// Activity 4 - Getter and Setters
// Task 7-8


//Getter Setters are always defined on the pre existing property in the prototype
class Human{
    constructor(firstname,lastname,age){
        this.firstname =firstname
        this.lastname = lastname
        this.age = age
        this.fullname = this.firstname+this.lastname
    }

    get fullname(){
        return this._fullname
    }
    set fullname(value){       //value is refering to the constructor's this.fullname
        this._fullname = value
    }

}

let h1 = new Human('homo', 'sepian', 100000)
// h1.fullname = "Hello"
console.log(h1.fullname)