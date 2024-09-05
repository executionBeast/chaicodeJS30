// Activity 1 - Creatin Exporting NativeModules
// Task 1 - create module to export add function not as named 

export const add = (x,y)=>{
    console.log("I am anonymous f(){} exported using module.exports=f(){} | Default export import")
    return x+y
}

export const person = {
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
        console.log(`\n----User information----- \nName:${this.name}\nAge:${this.age}\nGender:${this.gender}\nHeight:${this.height}\nWeight:${this.weight}`)
    }
}









// export default function Hello(){
//     console.log("helloe")
// }
// let obj = {
//     name:'jello'
// }
// export default  obj;

// for this function import add from './Math.js' won't work becoz it assumes default export
// import add from './Math.js'
//        ^^^
// SyntaxError: The requested module './Math.js' does not provide an export named 'default'



// exports.subtract = (x,y)=>{
//     console.log("I am subtract exported using exports.subtract(){}")
//     return x-y
// }