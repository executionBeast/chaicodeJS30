export const day = 'Day 13 Modules'
export const name= 'ChaiCode'
export const activity = 'Activity 3'

export function Greet(name){
    console.log(`Good Morning ${name}`)
}

export const Obj = {
    obj:"Object"
}


export const userDetails = {
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

export function Login(email,password){
    console.log(`Login Successful! Email:${email} Password:${[password]}`)
}

export function fetchUser(email){
    console.log("Fetching User Details.......")
    return {name:userDetails.name, age:userDetails.age, email:userDetails.email}
}

export function displayUser(user){
    console.log(`Fetched User Data Displayed --> Name: ${user.name} Age:${user.age} Email:${user.email}`)
    
}

// export default {day, name};