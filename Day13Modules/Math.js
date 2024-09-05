export const Add = function(x,y){
    console.log(`Addition: ${x}+${y}=${x+y}`)
    return x+y
}

export const Div = (x,y)=>{
    console.log(`Division: ${x}/${y}=${x/y}`)
    return x/y

}
export const PI = 3.14

export function Subtract(x,y){
    console.log(`Subtraction: ${x}-${y}=${x-y}`)
    return x-y
    
}

export const Multiply = (x,y)=>{
    console.log(`Multiply: ${x}*${y}=${x*y}`)
    return x*y

}

const exportDefault = ()=>{
    console.log("I'm default exported.......")
    return "'export default exportDefault;'"
}

export default exportDefault;

